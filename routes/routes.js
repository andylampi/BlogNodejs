const express = require("express")
const router = express.Router()
const pug = require("pug")
const creationPost = require("../controller/creationPost")
const auth = require("../middleware/auth")

router.get("", (req,res)=>{
    let authIsTrue = req.cookies.auth
    console.log(authIsTrue)
    if(authIsTrue == 0){
    res.render("index", {status : "Log In", routeStatus : "/auth/login/"})
    }
    else{
    res.render("index", {status : "Profile", routeStatus : "/auth/profile/"})

    }
})

router.get("/create/", (req,res)=>{
    res.send("We are  working for you")
})

// router.get("/create/post/",creationPost)

module.exports = router