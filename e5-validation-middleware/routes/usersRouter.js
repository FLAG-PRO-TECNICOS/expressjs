import express from 'express'
import { validateUser, validateID } from '../middlewares/zodValidation.js'
import * as usersController from '../controllers/usersController.js'

const router = express.Router()

router.get('/', usersController.getUsers)
router.get('/:id', validateID, usersController.getUser)
router.post('/', validateUser, usersController.postUser)
router.put('/:id', validateID, validateUser, usersController.putUser)
router.delete('/:id', validateID, usersController.deleteUser)

export default router
