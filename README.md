# Localized Address Formatting

[![npm version](https://badge.fury.io/js/localized-address-format.svg)](https://badge.fury.io/js/localized-address-format)
[![Release](https://github.com/DASPRiD/localized-address-format/actions/workflows/release.yml/badge.svg)](https://github.com/DASPRiD/localized-address-format/actions/workflows/release.yml)
[![codecov](https://codecov.io/gh/DASPRiD/localized-address-format/branch/master/graph/badge.svg?token=ID1YAAB9CP)](https://codecov.io/gh/DASPRiD/localized-address-format)


Zero-dependency address formatting library.

If you are in need for simply formatting postal addresses in a localized format, this is the right library for you. It
is based on code from [libaddressinput](https://github.com/google/libaddressinput) by Google and uses the same data from
their [Address Data Service](https://chromium-i18n.appspot.com/ssl-address/data), but in a pruned format which is only
a little over 5kb in size.

Usage of the library is very straight forward:

```typescript
import {formatAddress} from 'localized-address-format';

console.log(formatAddress({
    postalCountry: 'US',
    administrativeArea : 'CA',
    locality: 'San Fransisco',
    //dependentLocality: '',
    postalCode: '94016',
    //sortingCode: '',
    organization: 'Example Org.',
    name: 'Jon Doe',
    addressLines : ['548 Market St'],
}).join('\n'));
```

All fields of the address are optional and can either be left out completely or passed in as empty string or, in the
case of `addressLines`, be an empty array. The format of the resulting address is dependent on the `postalCountry`.

The formatted address will not include the country itself. Adding the country to the end of the address is up to your
application.
