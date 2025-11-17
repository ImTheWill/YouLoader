import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
export const port = process.env.PORT
export const environment = process.env.ENVIRONMENT
export const databaseUser = process.env.DATABASE_USER
export const databasePassword = process.env.DATABASE_PASSWORD
export const databasePort = process.env.DATABASE_PORT
export const sessionKey1 = process.env.SESSION_SECRET1
export const sessionKey2 = process.env.SESSION_SECRET2
