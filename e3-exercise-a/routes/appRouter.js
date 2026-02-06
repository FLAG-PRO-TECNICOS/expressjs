import express from 'express'
import { root, healthCheck } from '../controllers/appController.js'

const router = express.Router()

router.get('/', root)
router.get('/health', healthCheck)

export default router
