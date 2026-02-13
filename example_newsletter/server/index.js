import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import newsletterRouter from './routes/newsletterRouter.js'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use('/newsletter', newsletterRouter)

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
