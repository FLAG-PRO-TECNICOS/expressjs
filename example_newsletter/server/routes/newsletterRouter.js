import express from 'express'
import { postAddSubscriber } from '../controllers/newsletterController.js'

const router = express.Router()

router.post('/addsubscriber', postAddSubscriber)

export default router
