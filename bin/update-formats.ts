import {promises as fs} from 'fs';
import {SingleBar} from 'cli-progress';
import fetch from 'node-fetch';

const serviceUrl = 'https://chromium-i18n.appspot.com/ssl-address/data';

type RootData = {
    id : 'data';
    countries : string;
};

const getCountryCodes = async () : Promise<string[]> => {
    const response = await fetch(serviceUrl);

    if (!response.ok) {
        throw new Error('Could not load country list');
    }

    const data = await response.json() as RootData;
    return [...data.countries.split('~'), 'ZZ'];
};

type CountryData = {
    key ?: string;
    fmt ?: string;
};

const getCountryData = async (countryCode : string, progressBar : SingleBar) : Promise<CountryData> => {
    for (let i = 0; i < 5; ++i) {
        try {
            const response = await fetch(`${serviceUrl}/${countryCode}`);

            if (!response.ok) {
                continue;
            }

            const data = await response.json() as CountryData;

            progressBar.increment();
            return data;
        } catch {
            // Retry up to 5 times.
        }
    }

    throw new Error('Could not load data');
};

const main = async () => {
    const countryCodes = await getCountryCodes();
    const promises = [];

    const progressBar = new SingleBar({hideCursor: true});
    progressBar.start(countryCodes.length, 0);

    for (const countryCode of countryCodes) {
        promises.push(getCountryData(countryCode, progressBar));
    }

    const countries = await Promise.all(promises);
    progressBar.stop();
    const lines = [
        '// This file is auto-generated via "npm run update-formats". Do not alter manually!',
        '',
        'const addressFormats = new Map<string, string>([',
    ];
    let defaultAddressFormat : string | null = null;

    for (const country of countries) {
        if (!country.fmt) {
            continue;
        }

        if (!country.key) {
            defaultAddressFormat = country.fmt;
            continue;
        }

        lines.push(`    ['${country.key}', '${country.fmt}'],`);
    }

    lines.push(']);');

    if (!defaultAddressFormat) {
        throw new Error('Default address format missing');
    }

    lines.push(
        '',
        `export const defaultAddressFormat = '${defaultAddressFormat}';`,
        '',
        'export default addressFormats;',
        '',
    );

    await fs.writeFile(`${__dirname}/../src/addressFormats.ts`, lines.join('\n'));
};

main().catch(error => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
