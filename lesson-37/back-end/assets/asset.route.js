import express from 'express'

export const assetRouter = express.Router()

// temp data
const mockedAssets = [
    {
        id: 12, 
        description: 'foo',
        price: 800,
        quantity: 10
    },
    {
        id: 87, 
        description: 'bar',
        price: 65,
        quantity: 8
    },
    {
        id: 33, 
        description: 'rolex',
        price: 80000,
        quantity: 2
    },
    {
        id: 22, 
        description: 'swatch',
        price: 200,
        quantity: 100
    },
    {
        id: 888, 
        description: 'maserati',
        price: 300,
        quantity: 10
    }
]

assetRouter.get('', async (req, res) => {
    res.send(mockedAssets)
})
