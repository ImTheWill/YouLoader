import { Response, Request, NextFunction, json } from 'express'
import { insertUser, retrieveUser } from '../services/userService.ts'

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { first_name, last_name, username, email, password } = req.body
    try {
        await insertUser({ first_name, last_name, username, email, password })
        res.status(201).json({
            success: true,
            message: 'User created successfully',
        })
    } catch (e) {
        console.error('Error Inserting User: ', e)
        res.status(500).json({ success: false, message: 'Error creating user' })
    }
}

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { identifier, password }: UserLogin = req.body
    // console.log(identifier + ' ' + password)
    const user = await retrieveUser({ identifier, password })
    res.send(`userInfo: ${user}`)
}
