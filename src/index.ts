import formatDefinitions from './formats.json';

export type Address = {
    postalCountry? : string;
    administrativeArea? : string;
    locality? : string;
    dependentLocality? : string;
    postalCode? : string;
    sortingCode? : string;
    organization? : string;
    name? : string;
    addressLines? : string[];
};

const hasKey = <T>(object : T, key : keyof any) : key is keyof T => {
    return key in object;
};

const getFormat = (countryCode : string) => {
    countryCode = countryCode.toUpperCase();
    return hasKey(formatDefinitions, countryCode) ? formatDefinitions[countryCode] : formatDefinitions.ZZ;
};

const getFormatParts = (format : string) => {
    const parts : string[] = [];
    let literal = '';
    let escaped = false;

    for (const char of format) {
        if (escaped) {
            escaped = false;
            parts.push(`%${char}`);
        } else if (char === '%') {
            if (literal.length > 0) {
                parts.push(literal);
                literal = '';
            }

            escaped = true;
        } else {
            literal += char;
        }
    }

    if (literal.length > 0) {
        parts.push(literal);
    }

    return parts;
};

const fields : Record<string, keyof Address> = {
    '%N': 'name',
    '%O': 'organization',
    '%A': 'addressLines',
    '%D': 'dependentLocality',
    '%C': 'locality',
    '%S': 'administrativeArea',
    '%Z': 'postalCode',
    '%X': 'sortingCode',
};

type Field = (typeof fields)[keyof typeof fields];

const getField = (token : string) : Field | null => {
    if (hasKey(fields, token)) {
        return fields[token];
    }

    return null;
};

const addressHasField = (address : Address, field : string | null) => {
    if (!field) {
        return false;
    }

    if (field === 'addressLines') {
        return address.addressLines && address.addressLines.length > 0;
    }

    return hasKey(address, field) && address[field];
};

const pruneFormat = (formatParts : string[], address : Address) => {
    const prunedFormat : string[] = [];

    for (const [i, part] of formatParts.entries()) {
        if (part === '%n') {
            prunedFormat.push(part);
            continue;
        }

        const field = getField(part);

        if (field) {
            if (addressHasField(address, field)) {
                prunedFormat.push(part);
            }

            continue;
        }

        if ((
            i === formatParts.length - i
            || formatParts[i + 1] === '%n'
            || addressHasField(address, getField(formatParts[i + 1]))
        ) && (
            i === 0
            || formatParts[i - 1] === '%n'
            || (prunedFormat.length > 0 && getField(prunedFormat[prunedFormat.length - 1]) !== null)
        )) {
            prunedFormat.push(part);
        }
    }

    return prunedFormat;
};

const pruneAddress = (address : Address) : Address => {
    return {
        ...address,
        addressLines: address.addressLines ? address.addressLines.filter(Boolean) : undefined,
    };
};

export const formatAddress = (address : Address) => {
    address = pruneAddress(address);
    const format = getFormat(address.postalCountry || 'ZZ');
    const formatParts = getFormatParts(format);
    const prunedFormat = pruneFormat(formatParts, address);

    const lines : string[] = [];
    let currentLine = '';

    for (const part of prunedFormat) {
        if (part === '%n') {
            if (currentLine.length > 0) {
                lines.push(currentLine);
                currentLine = '';
            }

            continue;
        }

        const field = getField(part);

        if (field) {
            if (field === 'addressLines') {
                const addressLines = address.addressLines!;

                if (addressLines.length > 0) {
                    currentLine += addressLines[0];

                    if (addressLines.length > 1) {
                        lines.push(currentLine);
                        currentLine = '';
                        lines.push(...addressLines.splice(1));
                    }
                }
            } else {
                currentLine += address[field];
            }

            continue;
        }

        currentLine += part;
    }

    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    return lines;
};
