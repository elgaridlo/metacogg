const errorResponseStatus = require("../../utils/errorRespStatus")
const TournamentResult = require("./tournament-result.model")
const asyncHandler = require('express-async-handler')
const appError = require("../../utils/error/appError")
const Team = require("../teams/team.model")

const createTournamentResult = asyncHandler(async(req, res, next) => {
    const {tournament_id, team_id, point, position} = req.body
    const tournament_ids = []

    // console.log('teams = ', req.teams)
    req.data.map(item => {
        tournament_ids.push(item.id)
    })

    if(tournament_ids.length < 0 && !tournament_ids.includes(tournament_id)) {
        return next(new appError('Tournament tidak ditemukan!', 400))
    }

    // cek tournament id sudah terisi lebih dari 1 ?
    const cekTournament = await TournamentResult.findOne({tournament_id, position})
    const teamCheckWin = await TournamentResult.findOne({tournament_id, team_id})

    // Kalau tournament id < 3 cek position yang sudah terisi
    if(cekTournament) {
        return next(new appError('The champion has been created!', 400))
    }

    if(teamCheckWin) {
        return next(new appError(`They already win on ${teamCheckWin.position} place!`, 400))
    }

    // Kemudian bandingkan dengan posisi yang dimasukkan
    // check team id ada atau tidak dan sesuai dengan kode tournament atau tidak?
    const checkTeam = await Team.findOne({tournament_id, id: team_id})
    if (!checkTeam) {
        return next(new appError('Team ID tidak ditemukan!', 400))
    }


    const data = await TournamentResult.create(req.body)
    req.data = 'success'

    next()
    // res.json({
    //     status: 'Success',
    //     data 
    // })
})

module.exports = {createTournamentResult}