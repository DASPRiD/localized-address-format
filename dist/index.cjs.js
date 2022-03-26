'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// This file is auto-generated via "npm run update-formats". Do not alter manually!
const addressFormats = new Map([
    ['AC', '%N%n%O%n%A%n%C%n%Z'],
    ['AD', '%N%n%O%n%A%n%Z %C'],
    ['AE', '%N%n%O%n%A%n%S'],
    ['AF', '%N%n%O%n%A%n%C%n%Z'],
    ['AI', '%N%n%O%n%A%n%C%n%Z'],
    ['AL', '%N%n%O%n%A%n%Z%n%C'],
    ['AM', '%N%n%O%n%A%n%Z%n%C%n%S'],
    ['AR', '%N%n%O%n%A%n%Z %C%n%S'],
    ['AS', '%N%n%O%n%A%n%C %S %Z'],
    ['AT', '%O%n%N%n%A%n%Z %C'],
    ['AU', '%O%n%N%n%A%n%C %S %Z'],
    ['AX', '%O%n%N%n%A%nAX-%Z %C%nÅLAND'],
    ['AZ', '%N%n%O%n%A%nAZ %Z %C'],
    ['BA', '%N%n%O%n%A%n%Z %C'],
    ['BB', '%N%n%O%n%A%n%C, %S %Z'],
    ['BD', '%N%n%O%n%A%n%C - %Z'],
    ['BE', '%O%n%N%n%A%n%Z %C'],
    ['BF', '%N%n%O%n%A%n%C %X'],
    ['BG', '%N%n%O%n%A%n%Z %C'],
    ['BH', '%N%n%O%n%A%n%C %Z'],
    ['BL', '%O%n%N%n%A%n%Z %C %X'],
    ['BM', '%N%n%O%n%A%n%C %Z'],
    ['BN', '%N%n%O%n%A%n%C %Z'],
    ['BR', '%O%n%N%n%A%n%D%n%C-%S%n%Z'],
    ['BS', '%N%n%O%n%A%n%C, %S'],
    ['BT', '%N%n%O%n%A%n%C %Z'],
    ['BY', '%O%n%N%n%A%n%Z, %C%n%S'],
    ['CA', '%N%n%O%n%A%n%C %S %Z'],
    ['CC', '%O%n%N%n%A%n%C %S %Z'],
    ['CH', '%O%n%N%n%A%nCH-%Z %C'],
    ['CI', '%N%n%O%n%X %A %C %X'],
    ['CL', '%N%n%O%n%A%n%Z %C%n%S'],
    ['CN', '%Z%n%S%C%D%n%A%n%O%n%N'],
    ['CO', '%N%n%O%n%A%n%C, %S, %Z'],
    ['CR', '%N%n%O%n%A%n%S, %C%n%Z'],
    ['CU', '%N%n%O%n%A%n%C %S%n%Z'],
    ['CV', '%N%n%O%n%A%n%Z %C%n%S'],
    ['CX', '%O%n%N%n%A%n%C %S %Z'],
    ['CY', '%N%n%O%n%A%n%Z %C'],
    ['CZ', '%N%n%O%n%A%n%Z %C'],
    ['DE', '%N%n%O%n%A%n%Z %C'],
    ['DK', '%N%n%O%n%A%n%Z %C'],
    ['DO', '%N%n%O%n%A%n%Z %C'],
    ['DZ', '%N%n%O%n%A%n%Z %C'],
    ['EC', '%N%n%O%n%A%n%Z%n%C'],
    ['EE', '%N%n%O%n%A%n%Z %C'],
    ['EG', '%N%n%O%n%A%n%C%n%S%n%Z'],
    ['EH', '%N%n%O%n%A%n%Z %C'],
    ['ES', '%N%n%O%n%A%n%Z %C %S'],
    ['ET', '%N%n%O%n%A%n%Z %C'],
    ['FI', '%O%n%N%n%A%nFI-%Z %C'],
    ['FK', '%N%n%O%n%A%n%C%n%Z'],
    ['FM', '%N%n%O%n%A%n%C %S %Z'],
    ['FO', '%N%n%O%n%A%nFO%Z %C'],
    ['FR', '%O%n%N%n%A%n%Z %C'],
    ['GB', '%N%n%O%n%A%n%C%n%Z'],
    ['GE', '%N%n%O%n%A%n%Z %C'],
    ['GF', '%O%n%N%n%A%n%Z %C %X'],
    ['GG', '%N%n%O%n%A%n%C%nGUERNSEY%n%Z'],
    ['GI', '%N%n%O%n%A%nGIBRALTAR%n%Z'],
    ['GL', '%N%n%O%n%A%n%Z %C'],
    ['GN', '%N%n%O%n%Z %A %C'],
    ['GP', '%O%n%N%n%A%n%Z %C %X'],
    ['GR', '%N%n%O%n%A%n%Z %C'],
    ['GS', '%N%n%O%n%A%n%n%C%n%Z'],
    ['GT', '%N%n%O%n%A%n%Z- %C'],
    ['GU', '%N%n%O%n%A%n%C %Z'],
    ['GW', '%N%n%O%n%A%n%Z %C'],
    ['HK', '%S%n%C%n%A%n%O%n%N'],
    ['HM', '%O%n%N%n%A%n%C %S %Z'],
    ['HN', '%N%n%O%n%A%n%C, %S%n%Z'],
    ['HR', '%N%n%O%n%A%nHR-%Z %C'],
    ['HT', '%N%n%O%n%A%nHT%Z %C'],
    ['HU', '%N%n%O%n%C%n%A%n%Z'],
    ['ID', '%N%n%O%n%A%n%C%n%S %Z'],
    ['IE', '%N%n%O%n%A%n%D%n%C%n%S%n%Z'],
    ['IL', '%N%n%O%n%A%n%C %Z'],
    ['IM', '%N%n%O%n%A%n%C%n%Z'],
    ['IN', '%N%n%O%n%A%n%C %Z%n%S'],
    ['IO', '%N%n%O%n%A%n%C%n%Z'],
    ['IQ', '%O%n%N%n%A%n%C, %S%n%Z'],
    ['IR', '%O%n%N%n%S%n%C, %D%n%A%n%Z'],
    ['IS', '%N%n%O%n%A%n%Z %C'],
    ['IT', '%N%n%O%n%A%n%Z %C %S'],
    ['JE', '%N%n%O%n%A%n%C%nJERSEY%n%Z'],
    ['JM', '%N%n%O%n%A%n%C%n%S %X'],
    ['JO', '%N%n%O%n%A%n%C %Z'],
    ['JP', '〒%Z%n%S%n%A%n%O%n%N'],
    ['KE', '%N%n%O%n%A%n%C%n%Z'],
    ['KG', '%N%n%O%n%A%n%Z %C'],
    ['KH', '%N%n%O%n%A%n%C %Z'],
    ['KI', '%N%n%O%n%A%n%S%n%C'],
    ['KN', '%N%n%O%n%A%n%C, %S'],
    ['KP', '%Z%n%S%n%C%n%A%n%O%n%N'],
    ['KR', '%S %C%D%n%A%n%O%n%N%n%Z'],
    ['KW', '%N%n%O%n%A%n%Z %C'],
    ['KY', '%N%n%O%n%A%n%S %Z'],
    ['KZ', '%Z%n%S%n%C%n%A%n%O%n%N'],
    ['LA', '%N%n%O%n%A%n%Z %C'],
    ['LB', '%N%n%O%n%A%n%C %Z'],
    ['LI', '%O%n%N%n%A%nFL-%Z %C'],
    ['LK', '%N%n%O%n%A%n%C%n%Z'],
    ['LR', '%N%n%O%n%A%n%Z %C'],
    ['LS', '%N%n%O%n%A%n%C %Z'],
    ['LT', '%O%n%N%n%A%nLT-%Z %C'],
    ['LU', '%O%n%N%n%A%nL-%Z %C'],
    ['LV', '%N%n%O%n%A%n%C, %Z'],
    ['MA', '%N%n%O%n%A%n%Z %C'],
    ['MC', '%N%n%O%n%A%nMC-%Z %C %X'],
    ['MD', '%N%n%O%n%A%nMD-%Z %C'],
    ['ME', '%N%n%O%n%A%n%Z %C'],
    ['MF', '%O%n%N%n%A%n%Z %C %X'],
    ['MG', '%N%n%O%n%A%n%Z %C'],
    ['MH', '%N%n%O%n%A%n%C %S %Z'],
    ['MK', '%N%n%O%n%A%n%Z %C'],
    ['MM', '%N%n%O%n%A%n%C, %Z'],
    ['MN', '%N%n%O%n%A%n%C%n%S %Z'],
    ['MO', '%A%n%O%n%N'],
    ['MP', '%N%n%O%n%A%n%C %S %Z'],
    ['MQ', '%O%n%N%n%A%n%Z %C %X'],
    ['MT', '%N%n%O%n%A%n%C %Z'],
    ['MU', '%N%n%O%n%A%n%Z%n%C'],
    ['MV', '%N%n%O%n%A%n%C %Z'],
    ['MW', '%N%n%O%n%A%n%C %X'],
    ['MX', '%N%n%O%n%A%n%D%n%Z %C, %S'],
    ['MY', '%N%n%O%n%A%n%D%n%Z %C%n%S'],
    ['MZ', '%N%n%O%n%A%n%Z %C%S'],
    ['NA', '%N%n%O%n%A%n%C%n%Z'],
    ['NC', '%O%n%N%n%A%n%Z %C %X'],
    ['NE', '%N%n%O%n%A%n%Z %C'],
    ['NF', '%O%n%N%n%A%n%C %S %Z'],
    ['NG', '%N%n%O%n%A%n%D%n%C %Z%n%S'],
    ['NI', '%N%n%O%n%A%n%Z%n%C, %S'],
    ['NL', '%O%n%N%n%A%n%Z %C'],
    ['NO', '%N%n%O%n%A%n%Z %C'],
    ['NP', '%N%n%O%n%A%n%C %Z'],
    ['NR', '%N%n%O%n%A%n%S'],
    ['NZ', '%N%n%O%n%A%n%D%n%C %Z'],
    ['OM', '%N%n%O%n%A%n%Z%n%C'],
    ['PA', '%N%n%O%n%A%n%C%n%S'],
    ['PE', '%N%n%O%n%A%n%C %Z%n%S'],
    ['PF', '%N%n%O%n%A%n%Z %C %S'],
    ['PG', '%N%n%O%n%A%n%C %Z %S'],
    ['PH', '%N%n%O%n%A%n%D, %C%n%Z %S'],
    ['PK', '%N%n%O%n%A%n%C-%Z'],
    ['PL', '%N%n%O%n%A%n%Z %C'],
    ['PM', '%O%n%N%n%A%n%Z %C %X'],
    ['PN', '%N%n%O%n%A%n%C%n%Z'],
    ['PR', '%N%n%O%n%A%n%C PR %Z'],
    ['PT', '%N%n%O%n%A%n%Z %C'],
    ['PW', '%N%n%O%n%A%n%C %S %Z'],
    ['PY', '%N%n%O%n%A%n%Z %C'],
    ['RE', '%O%n%N%n%A%n%Z %C %X'],
    ['RO', '%N%n%O%n%A%n%Z %C'],
    ['RS', '%N%n%O%n%A%n%Z %C'],
    ['RU', '%N%n%O%n%A%n%C%n%S%n%Z'],
    ['SA', '%N%n%O%n%A%n%C %Z'],
    ['SC', '%N%n%O%n%A%n%C%n%S'],
    ['SD', '%N%n%O%n%A%n%C%n%Z'],
    ['SE', '%O%n%N%n%A%nSE-%Z %C'],
    ['SG', '%N%n%O%n%A%nSINGAPORE %Z'],
    ['SH', '%N%n%O%n%A%n%C%n%Z'],
    ['SI', '%N%n%O%n%A%nSI-%Z %C'],
    ['SJ', '%N%n%O%n%A%n%Z %C'],
    ['SK', '%N%n%O%n%A%n%Z %C'],
    ['SM', '%N%n%O%n%A%n%Z %C'],
    ['SN', '%N%n%O%n%A%n%Z %C'],
    ['SO', '%N%n%O%n%A%n%C, %S %Z'],
    ['SR', '%N%n%O%n%A%n%C%n%S'],
    ['SV', '%N%n%O%n%A%n%Z-%C%n%S'],
    ['SZ', '%N%n%O%n%A%n%C%n%Z'],
    ['TA', '%N%n%O%n%A%n%C%n%Z'],
    ['TC', '%N%n%O%n%A%n%C%n%Z'],
    ['TH', '%N%n%O%n%A%n%D %C%n%S %Z'],
    ['TJ', '%N%n%O%n%A%n%Z %C'],
    ['TM', '%N%n%O%n%A%n%Z %C'],
    ['TN', '%N%n%O%n%A%n%Z %C'],
    ['TR', '%N%n%O%n%A%n%Z %C/%S'],
    ['TV', '%N%n%O%n%A%n%C%n%S'],
    ['TW', '%Z%n%S%C%n%A%n%O%n%N'],
    ['TZ', '%N%n%O%n%A%n%Z %C'],
    ['UA', '%N%n%O%n%A%n%C%n%S%n%Z'],
    ['UM', '%N%n%O%n%A%n%C %S %Z'],
    ['US', '%N%n%O%n%A%n%C, %S %Z'],
    ['UY', '%N%n%O%n%A%n%Z %C %S'],
    ['UZ', '%N%n%O%n%A%n%Z %C%n%S'],
    ['VA', '%N%n%O%n%A%n%Z %C'],
    ['VC', '%N%n%O%n%A%n%C %Z'],
    ['VE', '%N%n%O%n%A%n%C %Z, %S'],
    ['VG', '%N%n%O%n%A%n%C%n%Z'],
    ['VI', '%N%n%O%n%A%n%C %S %Z'],
    ['VN', '%N%n%O%n%A%n%C%n%S %Z'],
    ['WF', '%O%n%N%n%A%n%Z %C %X'],
    ['XK', '%N%n%O%n%A%n%Z %C'],
    ['YT', '%O%n%N%n%A%n%Z %C %X'],
    ['ZA', '%N%n%O%n%A%n%D%n%C%n%Z'],
    ['ZM', '%N%n%O%n%A%n%Z %C'],
]);
const defaultAddressFormat = '%N%n%O%n%A%n%C';

const getFormatString = (countryCode) => {
    var _a;
    return (_a = addressFormats.get(countryCode.toUpperCase())) !== null && _a !== void 0 ? _a : defaultAddressFormat;
};
const getFormatSubstrings = (format) => {
    const parts = [];
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
const fields = new Map([
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
const getFieldForFormatSubstring = (formatSubstring) => {
    const field = fields.get(formatSubstring);
    /* istanbul ignore next imported format strings should never contain invalid substrings */
    if (!field) {
        throw new Error(`Could not find field for format substring ${formatSubstring}`);
    }
    return field;
};
const addressHasValueForField = (address, field) => {
    if (field === 'addressLines') {
        return address.addressLines !== undefined && address.addressLines.length > 0;
    }
    return address[field] !== undefined && address[field] !== '';
};
const formatSubstringRepresentsField = (formatSubstring) => {
    return formatSubstring !== '%n' && formatSubstring.startsWith('%');
};
const pruneFormat = (formatSubstrings, address) => {
    const prunedFormat = [];
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
        if ((i === formatSubstrings.length - 1
            || formatSubstrings[i + 1] === '%n'
            || addressHasValueForField(address, getFieldForFormatSubstring(formatSubstrings[i + 1]))) && (i === 0
            || !formatSubstringRepresentsField(formatSubstrings[i - 1])
            || (prunedFormat.length > 0 && formatSubstringRepresentsField(prunedFormat[prunedFormat.length - 1])))) {
            prunedFormat.push(formatSubstring);
        }
    }
    return prunedFormat;
};
const formatAddress = (address) => {
    var _a;
    const formatString = getFormatString((_a = address.postalCountry) !== null && _a !== void 0 ? _a : 'ZZ');
    const formatSubstrings = getFormatSubstrings(formatString);
    const prunedFormat = pruneFormat(formatSubstrings, address);
    const lines = [];
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
            const addressLines = address.addressLines.filter(addressLine => addressLine !== '');
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

exports.formatAddress = formatAddress;
//# sourceMappingURL=index.cjs.js.map
