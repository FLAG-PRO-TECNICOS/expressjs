import { ZodError } from 'zod'

export function errorHandler() {
	return function (err, req, res, next) {
		if (err instanceof ZodError) {
			res.status(400).json({
				status: 'error',
				message: 'invalid payload',
			})
			return
		}
		if (err.code === 'ER_DUP_ENTRY') {
			res.status(400).json({
				status: 'error',
				message: 'duplicate entry',
			})
			return
		}
		next()
	}
}
