const Knex = require('knex')
const { development } = require('../../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(development.connection)

Model.knex(knexConnection)

class Comment extends Model {
    static get tableName() {
        return 'comments'
    }

    static get relationMappings() {
        const User = require('./userSchema')
        const Idea = require('./ideasSchema')
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'comments.user_id',
                    to: 'users.id'
                }
            },
            idea: {
                relation: Model.BelongsToOneRelation,
                modelClass: Idea,
                join: {
                    from: 'comment.idea_id',
                    to: 'ideas.id'
                }
            }
        }
    }
}

module.exports = Comment