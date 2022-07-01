const express = require('express')
const { getAllTeam, sortMiddleware } = require('./team.controller')
const router = express.Router()

router.route('/').get(sortMiddleware, getAllTeam)

module.exports = router