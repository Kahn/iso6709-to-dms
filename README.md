# iso6709-to-dms

[![NPM downloads](https://img.shields.io/npm/dm/iso6709-to-dms.svg "NPM downloads")](https://www.npmjs.com/package/iso6709-to-dms)
[![NPM version](https://img.shields.io/npm/v/iso6709-to-dms.svg "NPM version")](https://www.npmjs.com/package/iso6709-to-dms)
[![Node version](https://img.shields.io/node/v/iso6709-to-dms.svg "Node version")](https://www.npmjs.com/package/iso6709-to-dms)

Convert ISO 6709 positions into decimal degree positions.

Don't use this for mission critical stuff, it does not implement the full standard. Useful enough for VATSIM.

## Install

### Node.JS

```bash
npm install iso6709-to-dms --save
```

```javascript
var iso2dec = require('iso2dec');
```

## Usage

```javascript
var point = iso2dec('+123456.7-0985432.1+15.9')
```

#### Return

```javascript
{
latitude: latitude,
longitude: longitude,
altitude: altitude
};
```

Note: `altitude` is not returned when not present in the source point.