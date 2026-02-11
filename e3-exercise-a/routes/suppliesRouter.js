import express from 'express'
import {
	getAllSupplies,
	getSupply,
	createSupply
} from '../controllers/suppliesController.js'

const router = express.Router()

// '/supplies'
router.get('/', getAllSupplies)
router.get('/:id', getSupply)
router.post('/', createSupply)

export default router
