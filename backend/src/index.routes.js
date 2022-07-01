const express = require('express')
const app = express()
const leaderRoute = require('./leaderboard/leaderboard.route')

app.use('/api/leaderboard', leaderRoute)

module.exports = app