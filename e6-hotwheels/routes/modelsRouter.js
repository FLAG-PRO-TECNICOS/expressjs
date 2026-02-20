import express from 'express'
import { getAll, postModel } from '../controllers/modelsController.js'

const router = express.Router()

router.get('/', getAll)
// router.get('/:id', undefined)

// /api/models/
router.post('/', postModel)

export default router
