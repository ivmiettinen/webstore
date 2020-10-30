import express from 'express'
import data from './data.js'

const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id

    const product = data.products.find((p) => p._id === id)

    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product not found' })
    }
})

app.get('/', (req, res) => {
    res.send('Server running')
})

const port = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`)
})
