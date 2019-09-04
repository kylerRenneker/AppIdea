const express = require('express')
const IdeasService = require('./ideas_service')

// const Knex = require('knex')
// const connection = require('../../knexfile')
// const { Model } = require('objection')

// const knexConnection = Knex(connection)
// Model.knex(knexConnection)

const ideaRouter = express.Router()
const { Idea } = require('../models/ideasSchema')

// ideaRouter
//     .route('/')
//     .get((get, res, next) => {
//         Idea.query()
//             .then(ideas => {
//                 res.json(ideas)
//             })
//             .catch(next)
//     })

ideaRouter.get('/', (req, res, next) => {
    // Idea.query()
    //     .then(ideas => {
    //         res.json(users)
    //     })
    // const idea1 = Idea.query().findById(1)

    // res.send(idea1)

    IdeasService.getAllIdeas(
        req.app.get('db')
    ).then(reviews => {
        res.json(reviews)
    }).catch(next)

})

module.exports = ideaRouter