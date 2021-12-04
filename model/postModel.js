const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title : String,
    text : String,
    author : {
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    created_at : Date,
    updated_at : Date
})

module.exports = postSchema