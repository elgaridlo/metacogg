const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    captain_id: {
        type: Number,
        required: true
    },
    logo: {
        type: String
    },
    tournament_id: {
        type: Number,
        required: true,
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

const Team = mongoose.model('team', teamSchema)

module.exports = Team