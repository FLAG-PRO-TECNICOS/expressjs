import { getSupplies, getSupplyById } from '../services/suppliesService.js'

export function getAllSupplies(req, res) {
	const { category, minQty } = req.query

	const result = getSupplies(category, minQty)

	res.json(result)
}

export function getSupply(req, res) {
	const id = parseInt(req.params.id)

	if (isNaN(id)) {
		res.status(400).json({ error: 'Invalid ID' })
		return
	}

	const result = getSupplyById(id)

	if (!result) {
		res.status(404).json({ error: 'Supply not found' })
		return
	}

	res.json(result)
}
