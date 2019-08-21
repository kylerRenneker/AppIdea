require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { PORT } = require('./config')

const app = express()

app.get('/', (reg, res) => {
    res.send('AppIdea App')
})

const morganOption = (process.env.NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

module.exports = app