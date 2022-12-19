const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4
const { User } = require('../models/user.model')


router.post('/', async (req, res) => {
    const newUser = await User.create({
        id: uuidv4(),
        name: req.body.name,
        username: req.body.username
    })

    res.send({ message: `user is created`, id: newUser.id })
})

module.exports = { router }