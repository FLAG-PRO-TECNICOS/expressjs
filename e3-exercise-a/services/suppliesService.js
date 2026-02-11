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

export function addSupply(name, category, quantity) {
	const supply = {
		id: getNewId(),
		name,
		category,
		quantity
	}

	supplies.push(supply)

	return supply
}

export function removeSupply(id) {
	const index = supplies.findIndex((value) => value.id == id)
	if (index >= 0) {
		supplies.splice(index, 1)
	}
	return index == -1 ? false : true
}

function getNewId() {
	// Classic way
	// let maxId = 0
	// for (let i = 0; i < supplies.length; i++) {
	// 	if (supplies[i].id > maxId) {
	// 		maxId = supplies[i].id
	// 	}
	// }
	// const newId = maxId + 1

	// Using map and Math.max
	// const ids = supplies.map(function (value) {
	// 	return value.id
	// })
	// console.log(ids)
	// const maxId = Math.max(...ids)
	// const newId = maxId + 1

	const maxId = Math.max(...supplies.map((value) => value.id))
	const newId = maxId <= 0 ? 1 : maxId + 1

	return newId
}
