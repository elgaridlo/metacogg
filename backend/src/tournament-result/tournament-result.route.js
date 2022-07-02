const express = require('express')
const { getResponse } = require('../crudhandler/crudhandler.controller')
const { getTeams } = require('../middleware/getTeams.middleware')
const { getAllTeam, addPointToTeam } = require('../teams/team.controller')
const { getTournament } = require('../tournament/tournament.controller')
const { addCoinUser, getUserCoin } = require('../users/user.controller')
const { createTournamentResult } = require('./tournament-result.controller')
const router = express.Router()

router.route('/').post(
    getAllTeam, 
    getTeams, 
    getTournament, 
    createTournamentResult, 
    // addCoinUser, 
    addPointToTeam,
    getResponse
    )

module.exports = router