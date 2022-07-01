const express = require('express')
const { getAllTournamentMemberByTeam, getTournament } = require('./tournament.controller')
const router = express.Router()

router.route('/').get(getTournament)

module.exports = router