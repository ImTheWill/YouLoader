//using type orm & postgres
import { Users } from '../models/user.ts'
import { FileFolder, File } from '../models/file.ts'
import { databaseUser, databasePassword, databasePort } from './environment.ts'
import { DataSource } from 'typeorm'

export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: Number(databasePort),
    username: databaseUser,
    password: databasePassword,
    database: databaseUser,
    entities: [Users, FileFolder, File],
    synchronize: true,
})
