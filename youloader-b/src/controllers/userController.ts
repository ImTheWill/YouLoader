import { Response, Request, NextFunction, json } from 'express'
import { insertUser } from '../services/userService.ts'

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { firstName, lastName, username, email, password } = req.body
    try {
        await insertUser({ firstName, lastName, username, email, password })
        res.status(201).json({
            success: true,
            message: 'User created successfully',
        })
    } catch (e) {
        console.error('Error Inserting User: ', e)
        res.status(500).json({ success: false, message: 'Error creating user' })
    }
}
//http://localhost:8000/api/user/createUser?firstName=William&lastName=Cerrtios&username=moxydev&email=wjcerritos1@gmail.com&password=12345678
