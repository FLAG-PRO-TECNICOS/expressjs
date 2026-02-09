import { currentDateTime } from '../services/dateService.js'

export function root(req, res) {
	res.send('Hello World!')
}

export function healthCheck(req, res) {
	const currentTime = currentDateTime()

	const response = {
		status: 'ok',
		time: currentTime
	}

	res.json(response)
}
