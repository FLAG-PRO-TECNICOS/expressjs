import * as z from 'zod'

import { findAll, insertModel } from '../services/modelsService.js'

export async function getAll(req, res) {
	const models = await findAll()
	res.json(models)
}

export async function postModel(req, res) {
	const ModelSchema = z.object({
		name: z.string().trim().min(5),
		debutYear: z.number().int().gte(1968).lte(2030),
		vehicleType: z.string().optional(),
		designer: z.string().optional(),
		notes: z.string().optional(),
	})

	const parsedModel = ModelSchema.parse(req.body)

	const result = await insertModel(parsedModel)

	res.json(result)
}
