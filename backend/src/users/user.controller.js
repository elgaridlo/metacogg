const TeamMember = require("../team-members/teamMembers.model")
const User = require("./user.model")

const addCoinUser = async(req,res,next) => {
    const {team_id, position} = req.body
    const coin = position == 1 ? 5 : position == 2 ? 3 : position == 3 ? 2 : 0 
    const getAllTeamMember = await TeamMember.find({team_id})

    await addCoin(coin, getAllTeamMember, getAllTeamMember.length)

    next()
}

const addCoin = async (coin, member, count) => {
    if(count === 0) return

    console.log('member = ', member[count-1].id)
    await User.updateOne({id: Number(member[count-1].user_id)}, {coin: 0}, {new: true}).exec()

    count -= 1
    addCoin(coin, member, count)
}

module.exports = {addCoinUser}