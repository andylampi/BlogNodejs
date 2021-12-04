const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
})

module.exports = UserSchema

