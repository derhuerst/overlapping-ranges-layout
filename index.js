'use strict'

const lastFilled = (arr) => {
	const i = Array.from(arr).reverse().findIndex(v => v !== null)
	if (i === -1) return -1
	return arr.length - 1 - i
}

const computeOverlappingRangesLayout = (sections) => {
	const layout = []

	let lastRow = []
	for (const [length, ranges] of sections) {
		const l = Math.max(ranges.length, lastFilled(lastRow) + 1)
		const row = new Array(l).fill(null)

		const known = ranges
		.filter(r => lastRow.includes(r))
		const unknown = ranges
		.filter(r => !lastRow.includes(r))

		// pick known ranges first
		for (const r of known) {
			const lastPos = lastRow.indexOf(r)
			row[lastPos] = r
		}

		// fill in remaining slots
		for (const r of unknown) {
			const pos = row.findIndex(v => v === null)
			row[pos] = r
		}

		layout.push([length, row])
		lastRow = row
	}
	return layout
}

module.exports = computeOverlappingRangesLayout
