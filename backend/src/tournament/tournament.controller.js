const { getAll } = require("../crudhandler/crudhandler.controller");
const Tournament = require("./tournament.model");


const getAllTournamentMemberByTeam = async(req, res, next) => {
    const getData = await Tournament.aggregate([
        {
            $lookup: {
                from: 'teams',
                localField: 'id',
                foreignField: 'tournament_id',
                as: 'tournament_member'
            }
        },
        // {
        //   $unwind: {
        //     path: "$team",
        //     preserveNullAndEmptyArrays: true
        //   }
        // }
    ])

    res.json({
        status: 'Ok',
        data: getData
    })
}

const getTournament = getAll(Tournament)

module.exports = {getAllTournamentMemberByTeam, getTournament}