const express = require('express')
const { getLeaderboard } = require('./leaderboard.controller')

const router = express.Router()

router.route('/').get(getLeaderboard)

module.exports = router