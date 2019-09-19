// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres@localhost:5432/AppIdea'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// require('dotenv').config()
// const { DB_URL } = require('./src/config')

// const pg = require('pg')
// //pg.defaults.ssl = true

// module.exports = {
//   client: 'pg',
//   connection: 'postgresql://postgres@localhost:5432/AppIdea'
// }
