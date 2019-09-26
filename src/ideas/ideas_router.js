const express = require('express')
const ideasRouter = express.Router()
const Idea = require('../models/ideasSchema')

ideasRouter
    .get('/', (req, res, next) => {
        Idea.query()
            .then(ideas => {
                res.json(ideas)
            }).catch(next)
    })
    .get('/user/:userId', (req, res, next) => {
        const id = req.params.userId
        Idea.query()
            .where('user_id', '=', id)
            .then(idea => {
                res.json(idea)
            }).catch(next)
    })
    .get('/:ideaId', (req, res, next) => {
        const id = req.params.ideaId
        Idea.query()
            .eager('[user, comments.[user]]')
            .modifyEager('user', builder => {
                builder.select('id', 'first_name', 'last_name', 'username')
            })
            .modifyEager('comments.[user]', builder => {
                builder.select('id', 'first_name', 'last_name', 'username')
            })
            .where('ideas.id', '=', id)
            .then(comments => {
                res.json(comments)
            }).catch(next)
    })


module.exports = ideasRouter