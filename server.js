const express = require("express")
const dotenv = require("dotenv")
const router = require("./routes/routes")
const authRouter = require("./routes/authRoute")
const { ConnectDB } = require("./config/db")
const path = require("path")


dotenv.config() 
let app = express(); 
ConnectDB()
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended:false }))


///////////////////////////////////////////
app.use("/", router)
app.use("/auth/", authRouter)

//////////////////////////////////////////

app.listen(process.env.PORT, console.log("The server is up!"))