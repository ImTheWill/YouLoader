import 'reflect-metadata'
import express from 'express'
import helmet from 'helmet'

import routes from './routes/index.ts'
import { port, environment } from './config/environment.ts'
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

//json/parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//central routes
app.use('/api', routes)

try {
    app.listen(port)
    console.log(`Server running at port: ${port}`)

    await PostgresDataSource.initialize()
    console.log(`Database successfully connected`)
} catch (e) {
    console.error('Error: ', e)
}
