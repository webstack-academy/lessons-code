import express from 'express'
const router = express.Router()
import { productsValidator, idValidator } from './product.validator.js'
import { v4 as uuidv4 } from 'uuid'

const products = []

router.post('/', idValidator, productsValidator, (req, res) => {
    const newProduct = {
        id: uuidv4(),
        details: res.locals.details,
        price: res.locals.price,
    }
    
    products.push(newProduct)

    res.send({ message: `product is created`, id: newProduct.id })
})

router.get('/', (req, res) => {
    res.send({products})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(p => p.id === id)

    if (!product) {
        res.status(404).send({ message: 'product not found' })
    }

    res.send(product)
})

router.put('/:id', productsValidator, (req, res) => {
    const id = req.params.id
    const details = req.body.details
    const price = req.body.price

    products.forEach(product => {
        if (product.id === id) {
            if (details) {
                product.details = details
            }
        
            if (price) {
                product.price = price
            }
        }
    })

    res.send({ message: 'product has been successfully updated' })

})

export { router }