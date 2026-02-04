import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
