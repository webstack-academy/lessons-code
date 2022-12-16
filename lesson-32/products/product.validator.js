
const productsValidator = (req, res, next) => {
    const details = req.body.details
    const price = req.body.price

    if(details?.length > 10 && price > 0){
        res.locals.details = details
        res.locals.price = price

        return next()

    }

    else{
        res.status(400)
        res.send('I parametri inseriti non sono corretti')
    }
}

const idValidator = (req, res, next) => {
    try {
        const id = req.body.id

        if(id) {
            res.status(400)
            throw new Error(`E' presente una property id`)
        }

        next()

    } catch (e) {
        console.log(e)
        res.send(e.message)
    }

}

module.exports = { productsValidator, idValidator }