import * as z from 'zod'

export function validateID(req, res, next) {
	const IdSchema = z.object({
		id: z.coerce.number().positive().int(),
	})

	const parsedParams = IdSchema.safeParse(req.params)
	if (!parsedParams.success) {
		res.status(400).json({
			status: 'error',
			message: 'invalid id param in url',
		})
		return
	}

	next()
}

export function validateUser(req, res, next) {
	const UserSchema = z.object({
		name: z.string(),
		email: z.email(),
		role: z.string(),
	})

	const parsedUser = UserSchema.safeParse(req.body)
	if (!parsedUser.success) {
		res.status(400).json({
			status: 'error',
			message: 'invalid payload',
		})
		return
	}

	req.user = parsedUser.data

	next()
}
