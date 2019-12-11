require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const ideasRouter = require('./ideas/ideas_router')
const usersRouter = require('./users/users_router')

const app = express()

const morganOption = (process.env.NODE_ENV === 'production')
    ? 'tiny'
    : 'common';


app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/ideas', ideasRouter)
app.use('/api/users', usersRouter)

app.get('/', (reg, res) => {
    res.send('AppIdea App')
})

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.log(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app