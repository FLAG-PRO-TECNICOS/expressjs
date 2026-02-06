import express from 'express'
import { getAllSupplies, getSupply } from '../controllers/suppliesController.js'

const router = express.Router()

// '/supplies'
router.get('/', getAllSupplies)
router.get('/:id', getSupply)

export default router
