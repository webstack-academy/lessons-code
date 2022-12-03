import express from 'express'

const app = express()
const port = 3000

import { router as productRoutes} from './products/product.route.js'

app.use(express.json())
app.use('/product', productRoutes)
app.get('/', (req, res) =>{
    res.send('hello world')
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

