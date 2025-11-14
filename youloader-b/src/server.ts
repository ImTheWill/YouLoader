import express from 'express'
const app = express()
const port: number = Number(process.env.PORT) || 3000

app.get('/', (req, res) => {
    res.send('Holla Will')
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port.toString()} `)
})
