const { getAll, updateOne } = require("../crudhandler/crudhandler.controller");
const TeamMember = require("../team-members/teamMembers.model");
const Team = require("./team.model");

const getAllTeam = getAll(Team)


const addPointToTeam = async(req,res,next) => {
    const {team_id, point} = req.body

    const dev = {$inc: {point}}
    const deleteData = {point:0}

    await updateOne(Team, {id: team_id}, dev)
    // await addCoin(coin, getAllTeamMember, getAllTeamMember.length)

    next()
}

const getTeamByTournamentID = async(req,res,next) => {
    const getTeams = await Team.find({tournament_id: req.params.id})

    req.data = getTeams
    next()
}
module.exports = {getAllTeam, addPointToTeam, getTeamByTournamentID}