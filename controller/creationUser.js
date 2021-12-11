const { user } = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const multer  = require('multer')

const upload = multer({ dest: 'imgGlobal/imageProfile/'})

let creationUser = asyncHandler(async (req,res) =>{
    const image = await req.file.filename
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
                    username : username,
                    age : age,
                    image: image,
                    password : hash
                })
                User.save((error)=>{
                    if(error) {
                        res.status(500).send(error)
                        return console.log(error)}
                        res.status(201).redirect("/auth/login")
                })
            }
        })
        
    }

})

module.exports = { creationUser, upload}