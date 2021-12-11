const { user } = require("../config/db")
const asyncHandler = require("express-async-handler")

const userProfile =  asyncHandler(async(req, res) => {
    username = req.cookies.username
    let foundUser = await user.findOne({ username })
    if(foundUser){
        foundUser.image = "/imageProfile/"+foundUser.image
        console.log(foundUser.image)
        return res.render("profile", {foundUser})
    }
    else{
        res.status(404).send("You aren't logged")
    }
})

module.exports = userProfile