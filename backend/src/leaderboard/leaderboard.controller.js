const Tournament = require("../tournament/tournament.model")


const getLeaderboard = async(req, res, next) => {
    const doc = await Tournament.find()

    res.status(200).json({
        status: 'OK',
        data: doc
    })
}

module.exports = {getLeaderboard}