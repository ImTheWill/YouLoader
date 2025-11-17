import { mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const createFolder = async (folderId: string) => {
    const folderPath = join(__dirname, '..', '..', 'folders', folderId)
    const dirCreation = await mkdir(folderPath, { recursive: true })
    console.log(dirCreation)
}

export const recieveFile = () => {}
