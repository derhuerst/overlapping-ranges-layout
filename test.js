'use strict'

const { deepStrictEqual, doesNotThrow } = require('assert')
const computeLayout = require('.')

// ---A---
//   -----B------
//      --C--
//         ----D--
//            -E-
const sections = [
	[2, ['A'                    ]],
	[3, ['A', 'B'               ]],
	[2, ['A', 'B', 'C'          ]],
	[1, [     'B', 'C'          ]],
	[2, [     'B', 'C', 'D'     ]],
	[1, [     'B',      'D'     ]],
	[3, [     'B',      'D', 'E']],
	[1, [               'D'     ]]
]

const ___ = null

deepStrictEqual(computeLayout(sections), [
	[2, ['A']],
	[3, ['A', 'B']],
	[2, ['A', 'B', 'C']],
	[1, [___, 'B', 'C']],
	[2, ['D', 'B', 'C']],
	[1, ['D', 'B', ___]],
	[3, ['D', 'B', 'E']],
	[1, ['D', ___, ___]],
])

// works with ranges that are not primitive types
doesNotThrow(() => {
	computeLayout([
		[1, [{foo: 'bar'}]]
	])
})

console.info('tests successful ✔︎')
