const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 225
    },
    email:{
        type: String,
        required: true,
        max: 225
    },
    password:{
        type: String,
        required: true,
        max: 1024
    }
})

module.exports = mongoose.model('User', userSchema)