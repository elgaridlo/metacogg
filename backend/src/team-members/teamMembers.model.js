const mongoose = require('mongoose')

const teamMemberSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    user_id: {
        type: Number,
        required: true,
    },
    team_id: {
        type: Number,
        required: true,
    },
    roles: {
        type: String,
        uppercase: true,
        enum: ['CAPTAIN','MEMBER','STANDIN'],
        required: true,
    },
    ingame_id: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const TeamMember = mongoose.model('teamMember', teamMemberSchema)

module.exports = TeamMember