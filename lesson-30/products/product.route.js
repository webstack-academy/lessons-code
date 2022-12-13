const { idValidator, productsValidator } = require("./product.validator");
const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4
const products = []
const { getConnection } = require('../db.service')

const createProductTable = async (email, password) => {
    try {
        const connection = await getConnection()
        const [rows, fields] =
            await connection.execute(`
               create table if not exists products (
                id varchar(255) not null primary key,
                details varchar(255) not null,
                price int not null
            );`)

    } catch (e) {
        console.log(e)
    }
}

createProductTable()

router.post('/', idValidator, productsValidator, async (req, res) => {
    const newProduct = {
        id: uuidv4(),
        details: res.locals.details,
        price: res.locals.price,
    }

    const connection = await getConnection()
    await connection.execute(`insert into products (id, details, price) values (?, ?, ?)`, [newProduct.id, newProduct.details, newProduct.price])

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

module.exports = { router }