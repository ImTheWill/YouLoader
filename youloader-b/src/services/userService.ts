import { PostgresDataSource } from '../config/database.ts'
import bcrypt from 'bcrypt'
import { Users } from '../models/user.ts'
import { createFolder } from './fileService.ts'

export const insertUser = async (user: UserData) => {
    console.log('Inserting User: ', user)
    try {
        const hashedUser = { ...user }
        hashedUser.password = await bcrypt.hash(hashedUser.password, 10)
        const userRepository = PostgresDataSource.getRepository(Users)
        const newUser = userRepository.create({ ...hashedUser, folder: {} })
        await userRepository.save(newUser)
        createFolder(newUser.folder.id) //
    } catch (e) {
        console.error('Error inserting: ', e)
    }
}

export const retrieveUser = async (userLogin: UserLogin) => {
    const userRepository = PostgresDataSource.getRepository(Users)
    try {
        let user = await userRepository.findOne({
            where: [
                {
                    email: userLogin.identifier,
                },
                { username: userLogin.identifier },
            ],
        })
        const match = await bcrypt.compare(userLogin.password, user!.password)
        if (match) {
            return JSON.stringify(user)
        }
        {
            throw new Error('PASSWORD INCORRECT')
        }
    } catch (e) {
        console.error('Error Finding User: ', e)
    }
}
