import * as z from 'zod'
import { addSubscriber } from '../services/newsletterService.js'

export async function postAddSubscriber(req, res) {
	const SubscriberInfo = z.object({
		email: z.email(),
		name: z.string().trim().min(3),
	})

	const parsedResult = SubscriberInfo.safeParse(req.body)
	if (!parsedResult.success) {
		res.status(400).json({
			status: 'error',
			message: 'invalid json payload',
		})
		return
	}

	const { email, name } = parsedResult.data
	const result = await addSubscriber(email, name)
	if (!result) {
		res.json({
			status: 'error',
			message: 'email already exists',
		})
	}

	res.json({
		status: 'ok',
		message: 'email saved successfully',
	})
}
