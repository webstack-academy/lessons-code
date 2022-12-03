const express = require('express')
const app = express()
const port = 3000
const productRouter = require('./product.route')


app.use(express.json())
app.use('/product', productRouter)

const products = []
// {
//   details: 'string',
//     price: 12
// }
// requirements
// deiltals.length > 10
// price > 0
// res.locals
const productsValidator = (req, res, next) => {
  const details = req.body.details
  const price = req.body.price

  if(details.length > 10 && price > 0){
    res.locals.details = details
    res.locals.price = price

    return next()
  }
  else{
    res.status(400)
    res.send('I parametri inseriti non sono corretti')
  }
}

app.post('/', productsValidator, (req, res) => {
  products.push({
    details: res.locals.details,
    price: res.locals.price
  })
  res.send({ message: 'Parametri aggiunti' })
})

app.get('/', (req, res) => {
    res.send({ products })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})