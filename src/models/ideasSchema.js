const Knex = require('knex')
const connection = require('../../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Idea extends Model {
    static get tableName() {
        return 'ideas'
    }
}

module.exports = Idea