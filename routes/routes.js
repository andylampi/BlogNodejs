const express = require("express")
const router = express.Router()
const pug = require("pug")
const creationPost = require("../controller/creationPost")


router.get("", (req,res)=>{
    console.log(req.cookies.auth)
    res.render("index")
})

router.get("/create/", (req,res)=>{
    res.send("We are  working for you")
})

// router.get("/create/post/",creationPost)

module.exports = router