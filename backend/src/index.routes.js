const express = require('express')
const app = express()
const userRoute = require('./users/user.route')
const leaderRoute = require('./leaderboard/leaderboard.route')
const tournamentRoute = require('./tournament/tournament.route')
const tournamentResultRoute = require('./tournament-result/tournament-result.route')
const teamRoute = require('./teams/team.route')

app.use('/api/user', userRoute)
app.use('/api/leaderboard', leaderRoute)
app.use('/api/tournament', tournamentRoute)
app.use('/api/tournamentResult', tournamentResultRoute)
app.use('/api/team', teamRoute)

module.exports = app