'use strict'

const computeLayout = require('.')

// ---A---
//   -----B------
//      --C--
//         ----D---
//            -E-
//             -F--
const sections = [
	[2, ['A'                         ]],
	[3, ['A', 'B'                    ]],
	[2, ['A', 'B', 'C'               ]],
	[1, [     'B', 'C'               ]],
	[2, [     'B', 'C', 'D'          ]],
	[1, [     'B',      'D'          ]],
	[1, [     'B',      'D', 'E'     ]],
	[2, [     'B',      'D', 'E', 'F']],
	[2, [               'D',      'F']]
]

const layout = computeLayout(sections)
console.log(layout)

const rendered = layout
.flatMap(([length, ranges]) => {
	const row = ranges.map(r => r === null ? ' ' : r).join(' ')
	return new Array(length).fill(row)
})
.join('\n')
console.log(rendered)
