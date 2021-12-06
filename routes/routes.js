const express = require("express")
const router = express.Router()
const pug = require("pug")
const creationPost = require("../controller/creationPost")


router.get("", (req,res)=>{
    res.send("Hello")
})

router.get("/create/", (req,res)=>{
    res.send("We are  working for you")
})

// router.get("/create/post/",creationPost)

module.exports = router