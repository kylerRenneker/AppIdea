const express = require('express')
const userRouter = express.Router()
const User = require('../models/userSchema')

userRouter
    .get('/', (req, res, next) => {
        User.query()
            .select('id', 'first_name', 'last_name', 'username')
            .then(users => {
                res.json(users)
            }).catch(next)
    })

module.exports = userRouter