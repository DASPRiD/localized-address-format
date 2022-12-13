import addressFormats, {defaultAddressFormat} from './addressFormats';

export type ScriptType = 'local' | 'latin';

export type Address = {
    postalCountry ?: string;
    administrativeArea ?: string;
    locality ?: string;
    dependentLocality ?: string;
    postalCode ?: string;
    sortingCode ?: string;
    organization ?: string;
    name ?: string;
    addressLines ?: string[];
};

type AddressField = keyof Address;

const getFormatString = (countryCode : string, scriptType : ScriptType) : string => {
    const format = addressFormats.get(countryCode.toUpperCase());

    if (!format) {
        return defaultAddressFormat;
    }

    return format[scriptType] ?? format.local;
};

const getFormatSubstrings = (format : string) : string[] => {
    const parts : string[] = [];
    let escaped = false;
    let currentLiteral = '';

    for (const char of format) {
        if (escaped) {
            escaped = false;
            parts.push(`%${char}`);
            continue;
        }

        if (char !== '%') {
            currentLiteral += char;
            continue;
        }

        if (currentLiteral.length > 0) {
            parts.push(currentLiteral);
            currentLiteral = '';
        }

        escaped = true;
    }

    if (currentLiteral.length > 0) {
        parts.push(currentLiteral);
    }

    return parts;
};

const fields = new Map<string, AddressField>([
    ['%N', 'name'],
    ['%O', 'organization'],
    ['%A', 'addressLines'],
    ['%D', 'dependentLocality'],
    ['%C', 'locality'],
    ['%S', 'administrativeArea'],
    ['%Z', 'postalCode'],
    ['%X', 'sortingCode'],
    ['%R', 'postalCountry'],
]);

const getFieldForFormatSubstring = (formatSubstring : string) : AddressField => {
    const field = fields.get(formatSubstring);

    /* istanbul ignore next imported format strings should never contain invalid substrings */
    if (!field) {
        throw new Error(`Could not find field for format substring ${formatSubstring}`);
    }

    return field;
};

const addressHasValueForField = (address : Address, field : AddressField) : boolean => {
    if (field === 'addressLines') {
        return address.addressLines !== undefined && address.addressLines.length > 0;
    }

    return address[field] !== undefined && address[field] !== '';
};

const formatSubstringRepresentsField = (formatSubstring : string) : boolean => {
    return formatSubstring !== '%n' && formatSubstring.startsWith('%');
};

const pruneFormat = (formatSubstrings : string[], address : Address) : string[] => {
    const prunedFormat : string[] = [];

    for (const [i, formatSubstring] of formatSubstrings.entries()) {
        // Always keep the newlines.
        if (formatSubstring === '%n') {
            prunedFormat.push(formatSubstring);
            continue;
        }

        if (formatSubstringRepresentsField(formatSubstring)) {
            // Always keep non-empty address fields.
            if (addressHasValueForField(address, getFieldForFormatSubstring(formatSubstring))) {
                prunedFormat.push(formatSubstring);
            }

            continue;
        }

        // Only keep literals that satisfy these two conditions:
        // 1. Not preceding an empty field.
        // 2. Not following a removed field.
        if ((
            i === formatSubstrings.length - 1
            || formatSubstrings[i + 1] === '%n'
            || addressHasValueForField(address, getFieldForFormatSubstring(formatSubstrings[i + 1]))
        ) && (
            i === 0
            || !formatSubstringRepresentsField(formatSubstrings[i - 1])
            || (prunedFormat.length > 0 && formatSubstringRepresentsField(prunedFormat[prunedFormat.length - 1]))
        )) {
            prunedFormat.push(formatSubstring);
        }
    }

    return prunedFormat;
};

const formatAddress = (address : Address, scriptType : ScriptType = 'local') : string[] => {
    const formatString = getFormatString(address.postalCountry ?? 'ZZ', scriptType);
    const formatSubstrings = getFormatSubstrings(formatString);
    const prunedFormat = pruneFormat(formatSubstrings, address);

    const lines : string[] = [];
    let currentLine = '';

    for (const formatSubstring of prunedFormat) {
        if (formatSubstring === '%n') {
            if (currentLine.length > 0) {
                lines.push(currentLine);
                currentLine = '';
            }

            continue;
        }

        if (!formatSubstringRepresentsField(formatSubstring)) {
            // Not a symbol we recognize, so must be a literal. We append it unchanged.
            currentLine += formatSubstring;
            continue;
        }

        const field = getFieldForFormatSubstring(formatSubstring);

        /* istanbul ignore next imported format strings should never contain the postal country */
        if (field === 'postalCountry') {
            // Country name is treated separately.
            continue;
        }

        if (field === 'addressLines') {
            // The field "address lines" represents the address lines of an address, so there can be multiple values.
            // It is safe to assert addressLines to be defined here, as the pruning process already checked for that.
            const addressLines = (address.addressLines as string[]).filter(addressLine => addressLine !== '');

            if (addressLines.length === 0) {
                // Empty address lines are ignored.
                continue;
            }

            currentLine += addressLines[0];

            if (addressLines.length > 1) {
                lines.push(currentLine);
                currentLine = '';
                lines.push(...addressLines.slice(1));
            }

            continue;
        }

        // Any other field can be appended as is.
        currentLine += address[field];
    }

    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    return lines;
};

export default formatAddress;
