const express = require('express')
const { getResponse, sortMiddleware } = require('../crudhandler/crudhandler.controller')
const { getAllTeam } = require('./team.controller')
const router = express.Router()

router.route('/').get(sortMiddleware, getAllTeam, getResponse)

module.exports = router