const Knex = require('knex')
const { development } = require('../../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(development.connection)

Model.knex(knexConnection)

class Idea extends Model {
    static get tableName() {
        return 'ideas'
    }

    // static get modifiers() {
    //     return {
    //         usernamesAndComments(builder) {
    //             builder.select('username', 'text')
    //         }
    //     }
    // }

    static get relationMappings() {
        const User = require('./userSchema')
        const Comment = require('./commentsSchema')
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'ideas.user_id',
                    to: 'users.id'
                }
            },
            comments: {
                relation: Model.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: 'ideas.id',
                    to: 'comments.idea_id'
                }
            },
        }
    }
}

module.exports = Idea