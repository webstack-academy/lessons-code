// import express from 'express'
const express = require('express');

const app = express()
const port = 3000

const productRoutes = require('./products/product.route.js');
const userRoutes = require('./users/users.route')

app.use(express.json())
app.use('/product', productRoutes.router)
app.use('/user', userRoutes.router)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})