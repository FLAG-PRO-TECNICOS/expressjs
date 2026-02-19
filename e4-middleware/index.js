import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

function a(req, res, next) {
	console.log('FUNCTION A IS CALLED!')
	next()
}

function b(req, res) {
	console.log('FUNCTION B IS CALLED!')
	res.send('ANOTHER YO!')
}

app.get('/', a, b)

function validate(req, res, next) {
	if (req.body.name) {
		console.log('PASSED!')
		next()
	} else {
		console.log('FAILED!')
		res.status(400).send('VALIDATION FAILED! YOU SUCK!!!!!')
	}
}

function handler(req, res) {
	const { name } = req.body

	res.send(`Hello ${name}`)
}

app.post('/test', validate, handler)

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
