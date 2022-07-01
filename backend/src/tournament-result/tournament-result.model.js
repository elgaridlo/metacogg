const mongoose = require('mongoose')

const tournamentResultSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    team_id: {
        type: Number,
        required: true,
    },
    position: {
        type: Number
    },
    point: {
        type: Number,
        default: 0
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

const TournamentResult = mongoose.model('tournament-result', tournamentResultSchema)

module.exports = TournamentResult