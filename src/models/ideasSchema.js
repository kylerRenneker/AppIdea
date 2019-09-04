// const Knex = require('knex')
//const connection = require('../../knexfile')
const { Model } = require('objection')

// const knexConnection = Knex({
//     client: 'pg',
//     connection: 'postgres://postgres@localhost:5432/AppIdea'
// })

// Model.knex(knexConnection)

class Idea extends Model {
    static get tableName() {
        return 'ideas'
    }

    // static get relationMappings() {
    //     return {
    //         users: {
    //             relation: Model.BelongsToOneRelation,
    //             modelClass: Idea,
    //             join: {
    //                 from: 'ideas.user_id',
    //                 to: 'users.id'
    //             }
    //         }
    //     }
    // }

}

module.exports = Idea