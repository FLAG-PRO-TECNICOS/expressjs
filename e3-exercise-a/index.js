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

// A4)
// 1 - Criar o event handler associado a rota post no controlador especifico
// 2 - Criar um supply (acrescentar um elemento novo ao array baseados nos dados recebidos por post, ignorar o ID)
// 3 - Criar uma funcao que define o no ID e actualizar o codigo de acrescentar ao array
// 4 - validacao

app.listen(port, function () {
	console.log(`Listening on ${port}`)
})
