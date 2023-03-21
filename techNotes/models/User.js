const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    //data model goes here
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //this is an array, data within will be a string
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', userSchema)