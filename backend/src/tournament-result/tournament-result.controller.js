const TournamentResult = require("./tournament-result.model")

const createTournamentResult = async(req, res, next) => {
    const {tournament_id, team_id, point} = req.body

    const cekTournament = await TournamentResult.find({tournament_id})

    if(cekTournament.length > 3) {
        errorResponseStatus(400,'Tournament champion has been created!',res);
    }
    
    

    res.json({
        status: 'Ok',
        data: 'Ya'
    })
}