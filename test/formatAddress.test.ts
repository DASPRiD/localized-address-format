import {formatAddress} from '../src';

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

    it('should use local script type by default', () => {
        expect(formatAddress(
            {postalCountry: 'HK', name: 'Name', organization: 'Org', addressLines: ['Line 1'], locality: 'City'}
        )).toStrictEqual(['City', 'Line 1', 'Org', 'Name']);
    });

    it('should use latin script type when requested', () => {
        expect(formatAddress(
            {postalCountry: 'HK', name: 'Name', organization: 'Org', addressLines: ['Line 1'], locality: 'City'},
            'latin'
        )).toStrictEqual(['Name', 'Org', 'Line 1', 'City']);
    });

    it('should fall back to local script type when latin is not available', () => {
        expect(formatAddress(
            {postalCountry: 'US', name: 'Name', organization: 'Org', addressLines: ['Line 1'], locality: 'City'},
            'latin'
        )).toStrictEqual(['Name', 'Org', 'Line 1', 'City']);
    });
});
