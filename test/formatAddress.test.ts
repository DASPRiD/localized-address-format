import {formatAddress} from '../src';
/*
test('formatAddress', () => {
    const address = formatAddress({
        postalCountry: 'US',
        administrativeArea: 'CA',
        locality: 'San Fransisco',
        postalCode: '94016',
        organization: 'Example Org.',
        name: 'Jon Doe',
        addressLines: ['548 Market St'],
    });

    expect(address).toStrictEqual([
        'Jon Doe',
        'Example Org.',
        '548 Market St',
        'San Fransisco, CA 94016',
    ]);
});
*/
describe('formatAddress', () => {
    it('should omit missing fields with literals between fields', () => {
        expect(formatAddress(
            {postalCountry: 'US'}
        )).toStrictEqual([]);
        expect(formatAddress(
            {postalCountry: 'US', administrativeArea: 'CA'}
        )).toStrictEqual(['CA']);
        expect(formatAddress(
            {postalCountry: 'US', administrativeArea: 'CA', locality: 'Los Angeles'}
        )).toStrictEqual(['Los Angeles, CA']);
        expect(formatAddress(
            {postalCountry: 'US', administrativeArea: 'CA', locality: 'Los Angeles', postalCode: '90291'}
        )).toStrictEqual(['Los Angeles, CA 90291']);
        expect(formatAddress(
            {postalCountry: 'US', locality: 'Los Angeles', postalCode: '90291'}
        )).toStrictEqual(['Los Angeles 90291']);
        expect(formatAddress(
            {postalCountry: 'US', administrativeArea: 'CA', postalCode: '90291'}
        )).toStrictEqual(['CA 90291']);
    });

    it('should omit missing fields with literals on separate lines', () => {
        expect(formatAddress(
            {postalCountry: 'AX'}
        )).toStrictEqual(['ÅLAND']);
        expect(formatAddress(
            {postalCountry: 'AX', locality: 'City'}
        )).toStrictEqual(['City', 'ÅLAND']);
        expect(formatAddress(
            {postalCountry: 'AX', locality: 'City', postalCode: '123'}
        )).toStrictEqual(['AX-123 City', 'ÅLAND']);
    });

    it('should remove empty address lines', () => {
        expect(formatAddress(
            {postalCountry: 'US', addressLines: ['foo', '', 'bar']}
        )).toStrictEqual(['foo', 'bar']);
        expect(formatAddress(
            {postalCountry: 'US', addressLines: ['']}
        )).toStrictEqual([]);
        expect(formatAddress(
            {postalCountry: 'US', addressLines: []}
        )).toStrictEqual([]);
    });

    it('should fall back to default format string', () => {
        expect(formatAddress(
            {postalCountry: 'ZZ', name: 'Name', organization: 'Org', addressLines: ['Line 1'], locality: 'City'}
        )).toStrictEqual(['Name', 'Org', 'Line 1', 'City']);
        expect(formatAddress(
            {name: 'Name', organization: 'Org', addressLines: ['Line 1'], locality: 'City'}
        )).toStrictEqual(['Name', 'Org', 'Line 1', 'City']);
    });
});
