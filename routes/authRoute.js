const express = require("express")
const router = express.Router()
const { creationUser, upload } = require("../controller/creationUser")
const verificationUser = require("../controller/loginUser")


router.post("/register/", upload.single("image"), creationUser)
router.get("/", (req,res) =>{
    res.render("registration")
})
router.get("/login/", (req,res) => {
    res.render("logIn")
})
router.post("/verification/", verificationUser)



module.exports = router