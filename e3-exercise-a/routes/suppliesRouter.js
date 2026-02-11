import express from 'express'
import {
	getAllSupplies,
	getSupply,
	createSupply,
	deleteSupply
} from '../controllers/suppliesController.js'

const router = express.Router()

// '/supplies'
router.get('/', getAllSupplies)
router.get('/:id', getSupply)
router.post('/', createSupply)

router.delete('/:id', deleteSupply)

export default router
