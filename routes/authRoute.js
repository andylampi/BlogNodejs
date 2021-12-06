const express = require("express")
const router = express.Router()
const creationUser = require("../controller/creationUser")
const verificationUser = require("../controller/loginUser")


router.post("/register/", creationUser)
router.get("/", (req,res) =>{
    res.render("registration")
})
router.get("/login/", (req,res) => {
    res.render("logIn")
})
router.post("/verification/", verificationUser)



module.exports = router