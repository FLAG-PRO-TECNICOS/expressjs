import {
	getSupplies,
	getSupplyById,
	addSupply,
	removeSupply
} from '../services/suppliesService.js'
import * as z from 'zod'

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

export function createSupply(req, res) {
	const SupplyBody = z.object({
		name: z.string(),
		category: z.string(),
		quantity: z.number().int().nonnegative()
	})

	const parsedResult = SupplyBody.safeParse(req.body)
	if (!parsedResult.success) {
		res.status(400).json({ error: 'Invalid supply data' })
		return
	}

	const { name, category, quantity } = parsedResult.data

	const result = addSupply(name, category, quantity)

	res.status(201).json(result)
}

export function deleteSupply(req, res) {
	const id = parseInt(req.params.id)

	if (isNaN(id)) {
		res.status(400).json({ error: 'Invalid ID' })
		return
	}

	const result = removeSupply(id)

	if (!result) {
		res.status(404).json({ error: 'Supply not found' })
		return
	}

	res.status(204).end()
}
