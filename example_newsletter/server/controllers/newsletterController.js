import * as z from 'zod'
import { addSubscriber } from '../services/newsletterService.js'

export async function postAddSubscriber(req, res) {
	const SubscriberInfo = z.object({
		email: z.email(),
	})

	const parsedResult = SubscriberInfo.safeParse(req.body)
	if (!parsedResult.success) {
		res.status(400).json({
			status: 'error',
			message: 'invalid email',
		})
		return
	}

	const { email } = parsedResult.data
	const result = await addSubscriber(email)
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
