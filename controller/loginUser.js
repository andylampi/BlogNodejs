const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { user } = require("../config/db")
const dotenv = require("dotenv")
const asyncHandler = require("express-async-handler")
const { set } = require("mongoose")

dotenv.config({ path: "../.env" })

let verificationUser = asyncHandler(async(req,res) => {
    let { username, password }  = req.body
    let foundUser = await user.findOne( { username } )
    if(foundUser){
        console.log(foundUser)
        bcrypt.compare(password, foundUser.password,  (error, matched) =>{
            if(!error && matched){
                let tokenResponse = jwt.sign({
                    username : foundUser.username}, process.env.SECRET )
                res.setHeader("token", tokenResponse)
                res.redirect("/")
            }
            else{
                res.status(404).send("Error")
            }
        })
    }
})

module.exports = verificationUser