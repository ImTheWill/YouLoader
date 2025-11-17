import { Response, Request, NextFunction, json } from 'express'
import { recieveFile } from '../services/fileService.ts'
const id = 23123123123
export const createFile = (req: Request, res: Response, next: NextFunction) => {
    const file = req.file
    const fileInfo = req.body
    // recieveFile(file, fileInfo, id)
}
