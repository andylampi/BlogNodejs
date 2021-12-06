const { user } = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

let creationUser = asyncHandler(async (req,res) =>{
    const {name, surname, username, age, password} = await req.body
    let foundUser = await user.findOne({ username })
    if(foundUser){
    console.log(foundUser)
    return res.status(404).send("Username alreday present") 
    }
    else{
        bcrypt.hash(password, 10, (error, hash) =>{
            if(error){
                console.log(error)
            }
            else{
                let User = new user({
                    name : name,
                    surname : surname,
                    username : surname,
                    age : age,
                    password : hash
                })
                User.save((error)=>{
                    if(error) {
                        res.status(500).send("Error")
                        return console.log(error)}
                        res.status(201).redirect("/auth/login")
                })
            }
        })
        
    }

})

module.exports = creationUser