'use strict'

const max = (vals) => {
	let max = -Infinity
	for (const val of vals) {
		if (val > max) max = val
	}
	return max
}

const computeOverlappingRangesLayout = (sections) => {
	const layout = []

	let lastPositions = new Map()
	for (const [length, ranges] of sections) {
		const l = Math.max(ranges.length, max(lastPositions.values()) + 1)
		const row = new Array(l).fill(null)
		const positions = new Map()

		const known = ranges
		.filter(r => lastPositions.has(r))
		const unknown = ranges
		.filter(r => !lastPositions.has(r))

		// pick known ranges first
		for (const r of known) {
			const lastPos = lastPositions.get(r)
			positions.set(r, lastPos)
			row[lastPos] = r
		}

		// fill in remaining slots
		for (const r of unknown) {
			const pos = row.findIndex(v => v === null)
			positions.set(r, pos)
			row[pos] = r
		}

		layout.push([length, row])
		lastPositions = positions
	}
	return layout
}

module.exports = computeOverlappingRangesLayout
