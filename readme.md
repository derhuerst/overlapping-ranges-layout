# overlapping-ranges-layout

**overlapping-ranges-layout**

[![npm version](https://img.shields.io/npm/v/overlapping-ranges-layout.svg)](https://www.npmjs.com/package/overlapping-ranges-layout)
[![build status](https://api.travis-ci.org/derhuerst/overlapping-ranges-layout.svg?branch=master)](https://travis-ci.org/derhuerst/overlapping-ranges-layout)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/overlapping-ranges-layout.svg)
![minimum Node.js version](https://img.shields.io/node/v/overlapping-ranges-layout.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install overlapping-ranges-layout
```


## Usage

```js
const computeLayout = require('overlapping-ranges-layout')

// see also the flatten-overlapping-ranges package
// ---A---
//   -----B------
//      --C--
//         ----D---
const sections = [
	[2, ['A'               ]],
	[3, ['A', 'B'          ]],
	[2, ['A', 'B', 'C'     ]],
	[1, [     'B', 'C'     ]],
	[2, [     'B', 'C', 'D']],
	[1, [     'B',      'D']],
	[2, [               'D']]
]

const layout = computeLayout(sections)
console.log(layout)
```

```js
[
	[2, ['A'           ]],
	[3, ['A',  'B'     ]],
	[2, ['A',  'B', 'C']],
	[1, [null, 'B', 'C']],
	[2, ['D',  'B', 'C']],
	[1, ['D',  'B'     ]],
	[2, ['D'           ]]
]
```


## Contributing

If you have a question or need support using `overlapping-ranges-layout`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/overlapping-ranges-layout/issues).
