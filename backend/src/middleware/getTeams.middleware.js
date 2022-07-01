const getTeams = async(req, res, next) => {
    const {data} = req
    
    req.teams = data

    next()
}

module.exports = {getTeams}