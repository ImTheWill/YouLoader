import express from 'express'

import userRouter from './userRoutes.ts'
import fileRouter from './fileRoutes.ts'
import authRouter from './authRoutes.js'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/file', fileRouter)

export default router
