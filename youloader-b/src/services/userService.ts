import { PostgresDataSource } from '../config/database.ts'
import { User } from '../models/user.ts'

export const insertUser = async (user: UserData) => {
    console.log('Inserting User: ', user)
    try {
        await PostgresDataSource.createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()
    } catch (e) {
        console.error('Error inserting: ', e)
    }
}
export const getUser = async (id: string) => {
    const user = await PostgresDataSource.createQueryBuilder()
        .select('user')
        .from(User, 'user')
        .where('id = :userId', { userId: id })
        .getOne()
}
