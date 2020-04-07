import {formatAddress} from '../index';

test('formatAddress', () => {
    const address = formatAddress({
        postalCountry: 'US',
        administrativeArea : 'CA',
        locality: 'San Fransisco',
        postalCode: '94016',
        organization: 'Example Org.',
        name: 'Jon Doe',
        addressLines : ['548 Market St'],
    });

    expect(address).toStrictEqual([
        'Jon Doe',
        'Example Org.',
        '548 Market St',
        'San Fransisco, CA 94016',
    ]);
});

test('pruneAddress', () => {
    const address = formatAddress({
        addressLines : ['foo', ''],
    });

    expect(address).toStrictEqual([
        'foo',
    ]);
});
