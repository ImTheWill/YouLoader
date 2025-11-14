//using type orm & postgres

import { databaseUser, databasePassword, databasePort } from './environment.ts'
import { DataSource } from 'typeorm'

console.log(databaseUser! + databasePassword! + databasePort!)
export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: Number(databasePort),
    username: databaseUser,
    password: databasePassword,
    database: databaseUser,
    entities: [
        // ....
    ],
})
