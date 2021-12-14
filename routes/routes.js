const express = require("express")
const router = express.Router()
const pug = require("pug")
const creationPost = require("../controller/creationPost")
const auth = require("../middleware/auth")
const printYoungsPost = require("../controller/homePage")


router.get("", printYoungsPost)

router.get("/create/", auth, (req,res)=>{
    res.render("newPost")
})

router.get("/create/post/",creationPost)

module.exports = router