const express = require('express')
const commentsRouter = express.Router()
const Comment = require('../models/commentsSchema')

module.exports = commentsRouter