const express = require("express")
const router = express.Router()
const pug = require("pug")
const creationPost = require("../controller/creationPost")
const auth = require("../middleware/auth")

router.get("", (req,res)=>{
    let authIsTrue = req.cookies.auth
    if(authIsTrue == 0 || authIsTrue == "undefined"){
        res.render("index", {status : "Log In", routeStatus : "/auth/login/"})
    }
    else{
        console.log(authIsTrue)
        res.render("index", {status : "Profile", routeStatus : "/auth/profile/"})
    }
})

router.get("/create/", (req,res)=>{
    res.send("We are  working for you")
})

// router.get("/create/post/",creationPost)

module.exports = router