const express = require('express')
const app = express()
const leaderRoute = require('./leaderboard/leaderboard.route')
const tournamentRoute = require('./tournament/tournament.route')
const teamRoute = require('./teams/team.route')

app.use('/api/leaderboard', leaderRoute)
app.use('/api/tournament', tournamentRoute)
app.use('/api/team', teamRoute)

module.exports = app