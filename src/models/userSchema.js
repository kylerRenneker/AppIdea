// const Knex = require('knex')
// const connection = require('../../knexfile')
// const { Model } = require('objection')

// const knexConnection = Knex(connection)

// Model.knex(knexConnection)

// const { Idea } = require('./ideasSchema')


// class User extends Model {
//     static get tableName() {
//         return 'users'
//     }

//     static get relationMappings() {
//         return {
//             user: {
//                 relation: Model.HasManyRelation,
//                 modelClass: Idea,
//                 join: {
//                     from: 'ideas.id',
//                     to: 'ideas.user_id'
//                 }
//             }
//         }
//     }

// }

// module.exports = User