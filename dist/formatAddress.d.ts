export declare type Address = {
    postalCountry?: string;
    administrativeArea?: string;
    locality?: string;
    dependentLocality?: string;
    postalCode?: string;
    sortingCode?: string;
    organization?: string;
    name?: string;
    addressLines?: string[];
};
declare const formatAddress: (address: Address) => string[];
export default formatAddress;
