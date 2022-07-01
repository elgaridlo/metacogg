const express = require('express')
const { getAllTeam } = require('./team.controller')
const router = express.Router()

router.route('/').get(getAllTeam)

module.exports = router