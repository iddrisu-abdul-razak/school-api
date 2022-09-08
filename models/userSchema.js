const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    },

    email: {
        type: String,
        unique: true,
        require: true,
    },

    password: {
        type: String,
        require: true,
    }


})

const User = mongoose.model('user', userSchema)
module.exports = User;