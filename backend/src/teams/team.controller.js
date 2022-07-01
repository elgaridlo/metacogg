const { getAll } = require("../crudhandler/crudhandler.controller");
const Team = require("./team.model");


const getAllTeam = getAll(Team)

module.exports = {getAllTeam}