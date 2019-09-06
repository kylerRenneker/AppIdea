const express = require('express')
const ideaRouter = express.Router()
const Idea = require('../models/ideasSchema')

ideaRouter
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


module.exports = ideaRouter