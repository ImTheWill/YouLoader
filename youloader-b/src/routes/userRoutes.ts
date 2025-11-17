import express from 'express'
import { createUser, getUser } from '../controllers/userController.ts'
const router = express.Router()

router.get('/getUser', getUser)
router.post('/createUser', createUser)

export default router
