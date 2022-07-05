const express = require('express')
const { getResponse, sortMiddleware, filterData } = require('../crudhandler/crudhandler.controller')
const { getAllTournamentMemberByTeam, getTournament } = require('./tournament.controller')
const router = express.Router()

router.route('/').get(sortMiddleware,filterData, getTournament, getResponse)

module.exports = router