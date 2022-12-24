import express from 'express'
import { assetRouter } from './assets/asset.route.js'
import cors from 'cors'

const app = express()
const port = 3000


// app.use(cors({
//     origin: '*'
// }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, enctype')

    next()
  })

app.use('/asset', assetRouter)

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})