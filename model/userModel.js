const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    username : String,
    password : String,
    image : String,
    is_admin : {type : Boolean, default : false}
})

module.exports = UserSchema

