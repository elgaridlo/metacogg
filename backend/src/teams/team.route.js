const express = require('express')
const { getResponse, sortMiddleware, filterData } = require('../crudhandler/crudhandler.controller')
const { getAllTeam, getTeamByTournamentID } = require('./team.controller')
const router = express.Router()

router.route('/').get(sortMiddleware, filterData, getAllTeam, getResponse)
router.route('/teamByTournament/:id').get(getTeamByTournamentID, getResponse)


module.exports = router