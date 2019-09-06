const express = require('express')
const ideaRouter = express.Router()
const Idea = require('../models/ideasSchema')

ideaRouter.get('/', (req, res, next) => {
    Idea.query()
        .then(ideas => {
            res.json(ideas)
        }).catch(next)
})

module.exports = ideaRouter