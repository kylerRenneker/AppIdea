const Knex = require('knex')
const connection = require('../../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Idea extends Model {
    static get tableName() {
        return 'ideas'
    }

    static get relationMappings() {
        const User = require('./userSchema')
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'ideas.user_id',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = Idea