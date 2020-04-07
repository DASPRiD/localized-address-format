import {SingleBar} from 'cli-progress';
import {promises as fs} from 'fs';
import fetch from 'node-fetch';

const serviceUrl = 'https://chromium-i18n.appspot.com/ssl-address/data';

const getCountryCodes = async () : Promise<string[]> => {
    const response = await fetch(serviceUrl);
    const data = await response.json();

    return [...data.countries.split('~'), 'ZZ'];
};

type CountryData = {
    key : string;
    fmt? : string;
};

const getCountryData = async (countryCode : string, progressBar : SingleBar) : Promise<CountryData> => {
    for (let i = 0; i < 5; ++i) {
        try {
            const response = await fetch(`${serviceUrl}/${countryCode}`);
            const data = await response.json();

            progressBar.increment();
            return data;
        } catch (e) {
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

    let countries : CountryData[];

    try {
        countries = await Promise.all(promises);
    } catch (e) {
        // tslint:disable-next-line:no-console
        console.error('Could not load all countries');
        return;
    }

    progressBar.stop();
    const formats : Record<string, string> = {};

    for (const country of countries) {
        if (!country.fmt) {
            continue;
        }

        formats[country.key || 'ZZ'] = country.fmt;
    }

    await fs.writeFile(`${__dirname}/../resources/formats.json`, JSON.stringify(formats));
};

main();
