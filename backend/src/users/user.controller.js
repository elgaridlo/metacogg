const expressAsyncHandler = require("express-async-handler")
const { getAll } = require("../crudhandler/crudhandler.controller")
const { path } = require("../index.routes")
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

    console.log('member = ', member[count-1].user_id)
    const dev = {$inc: {coin}}
    const deleteData = {coin:0}
    await User.updateOne({id: Number(member[count-1].user_id)}, dev, {new: true}).exec()

    count -= 1
    addCoin(coin, member, count)
}

// const getAllUser = getAll(User)

const getAllUser = expressAsyncHandler(
    async (req, res, next) => {
        console.log('req.sort = ',req.sort)
        const data = await User.aggregate([
            {
                $lookup: {
                    from: 'teammembers',
                    let: {user_id: "$id"},
                    pipeline: [
                        { $match: { $expr: { $eq: ["$$user_id", "$user_id"] } } },
                        {
                            $lookup: {
                              from: "teams",
                              localField: "team_id",
                              foreignField: "id",
                              as: "team_member_id"
                            },
                          },
                          {
                            $unwind: {
                                path: "$team_member_id"
                            }
                        }
                    ],
                    as: 'user_member_id'
                }
            },
            {
                $unwind: {
                    path: "$user_member_id"
                }
            }
        ]).sort(req.sort).exec()

        req.data = data

        next()
    })

module.exports = {addCoinUser, getAllUser}