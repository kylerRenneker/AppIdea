require('dotenv').config()
const { DB_URL } = require('./src/config')

const pg = require('pg')
//pg.defaults.ssl = true

module.exports = {
  client: 'pg',
  connection: 'postgresql://postgres@localhost:5432/AppIdea'
}