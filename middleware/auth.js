const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config({ path: "../.env"})

const auth = (req, res, next) =>{
    let auth = req.cookies.auth 
    jwt.verify( auth, process.env.SECRET, (error, decoded) => {
        if(error) return res.status(404).send("You aren't verificated")
        req.user = decoded
        console.log("Authenticated as", req.user)
        next()
    })
}

module.exports = auth