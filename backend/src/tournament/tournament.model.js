const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    team_count: {
        type: Number,
        required: true,
    },
    slot: {
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

const Tournament = mongoose.model('tournament', tournamentSchema)

module.exports = Tournament