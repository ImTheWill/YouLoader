import 'reflect-metadata'
import express from 'express'
import helmet from 'helmet'
import cookieSession from 'cookie-session'
import routes from './routes/index.ts'
import {
    port,
    environment,
    sessionKey1,
    sessionKey2,
} from './config/environment.ts'
import { PostgresDataSource } from './config/database.ts'

//helmet security
const app = express()
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                'script-src': ["'self'", 'www.moxydev.com'],
            },
        },
    })
)

app.use(
    cookieSession({
        name: 'session',
        keys: [sessionKey1!, sessionKey2!], // Secret keys for signing
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        httpOnly: true,
        secure: environment === 'production', // HTTPS only in production
        sameSite: 'strict',
    })
)

//json/parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//central routes
app.use('/api', routes)

//server start
try {
    app.listen(port)
    console.log(`Server running at port: ${port}`)

    await PostgresDataSource.initialize()
    console.log(`Database successfully connected`)
} catch (e) {
    console.error('Error: ', e)
}
