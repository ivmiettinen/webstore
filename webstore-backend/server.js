import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js'
import userRouter from './routers/userRouter.js'
import orderRouter from './routers/orderRouter.js'
import cors from 'cors'

dotenv.config()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(cors());
app.options('*', cors());


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/webstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})


// app.get('/api/products/:id', (req, res) => {
//     const id = req.params.id

//     const product = data.products.find((p) => p._id === id)

//     if (product) {
//         res.send(product)
//     } else {
//         res.status(404).send({ message: 'Product not found' })
//     }
// })

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req, res) => {
    res.send('Server running')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`)
})
