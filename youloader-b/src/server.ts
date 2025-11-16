import express from 'express'
import routes from './routes/index.ts'
import 'reflect-metadata'
import { port, environment } from './config/environment.ts'
import { PostgresDataSource } from './config/database.ts'

const app = express()

app.use('/api', routes)

try {
    app.listen(port)
    console.log(`Server running at port: ${port}`)

    await PostgresDataSource.initialize()
    console.log(`Database successfully connected`)
} catch (e) {
    console.error('Error: ', e)
}
