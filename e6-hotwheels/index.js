import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import modelsRouter from './routes/modelsRouter.js'
import { errorHandler } from './middleware/errorMiddleware.js'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/models', modelsRouter)

app.use(errorHandler())

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
