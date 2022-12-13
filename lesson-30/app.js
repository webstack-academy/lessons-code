// import express from 'express'
const express = require('express');
const { getConnection } = require("./db.service");

const app = express()
const port = 3000

const productRoutes = require('./products/product.route.js');
app.use(express.json())
app.use('/product', productRoutes.router)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    getConnection()
        .then(connection => {
        console.log('connected to db')
    })
        .catch(err => {
            console.log('error connecting to db', err)
        })

    console.log(`Example app listening on port ${port}`)
})