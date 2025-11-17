import express from 'express'
import { Response, Request, NextFunction } from 'express'
import { createUser } from '../controllers/userController.ts'
import { getUser } from '../services/userService.ts'
const router = express.Router()

router.get('/:id', async (req, res) => {
    const user = await getUser(req.params.id)
    res.send(`userInfo: ${user}`)
})
router.post('/createUser', createUser)

export default router
