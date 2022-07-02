const { getAll } = require("../crudhandler/crudhandler.controller");
const Team = require("./team.model");

const getAllTeam = getAll(Team)


// const addPointToTeam = 

module.exports = {getAllTeam}