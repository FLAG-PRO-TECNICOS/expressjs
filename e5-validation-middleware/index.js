import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { addCors } from './middlewares/myCors.js'

import usersRouter from './routes/usersRouter.js'

const port = process.env.PORT
const app = express()

// app.use(cors())
app.use(addCors)
app.use(express.json())

app.use('/users', usersRouter)

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
