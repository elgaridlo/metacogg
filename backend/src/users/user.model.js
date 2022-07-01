const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    coin: {
        type: Number,
        required: true,
        default: 0
    },
    picture: {
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

const User = mongoose.model('user', userSchema)

module.exports = User