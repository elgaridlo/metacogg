const { getAll } = require("../crudhandler/crudhandler.controller");
const Team = require("./team.model");


const getAllTeam = getAll(Team)

const sortMiddleware = async(req, res, next) => {
    const sortBy = req.query.sort
    if (sortBy ) {
        let obj = {}
        obj[sortBy] = 1
        req.sort = obj
    }
    next()
}

module.exports = {getAllTeam, sortMiddleware}