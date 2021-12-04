const mongoose = require("mongoose")
const UserSchema = require("../model/userModel")
const UserPost = require("../model/postModel")


const ConnectDB = () => {
    mongoose.connect(process.env.mongouri, (error)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("Connection DB: OK")
        }
    })
}

let user = mongoose.model("User", UserSchema)
let post = mongoose.model("Post", UserSchema)



module.exports = {ConnectDB, user, post}