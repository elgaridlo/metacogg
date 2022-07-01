const express = require('express')
const app = express()
const leaderRoute = require('./leaderboard/leaderboard.route')
const tournamentRoute = require('./tournament/tournament.route')

app.use('/api/leaderboard', leaderRoute)
app.use('/api/tournament', tournamentRoute)

module.exports = app