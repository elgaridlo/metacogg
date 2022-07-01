const express = require('express')
const { getResponse } = require('../crudhandler/crudhandler.controller')
const { getAllTournamentMemberByTeam, getTournament } = require('./tournament.controller')
const router = express.Router()

router.route('/').get(getTournament, getResponse)

module.exports = router