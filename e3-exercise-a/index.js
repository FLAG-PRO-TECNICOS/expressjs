import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import appRouter from './routes/appRouter.js'
import suppliesRouter from './routes/suppliesRouter.js'

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use(appRouter)
app.use('/supplies', suppliesRouter)

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
