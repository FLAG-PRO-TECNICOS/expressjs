import supplies from '../data/supplies.js'

export function getSupplies(category, minQuantity) {
	let result = supplies
	// const result = [...supplies] shallow copy
	// const result = JSON.parse(JSON.stringify(supplies)) deep copy

	if (category) {
		result = result.filter((value) => value.category == category)
	}

	if (minQuantity) {
		result = result.filter((value) => value.quantity >= minQuantity)
	}

	return result
}

export function getSupplyById(id) {
	return supplies.find((value) => value.id == id)
}
