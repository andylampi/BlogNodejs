const express = require("express")
const dotenv = require("dotenv")
const router = require("./routes/routes")
const { ConnectDB } = require("./config/db")

dotenv.config()
let app = express();
ConnectDB()

///////////////////////////////////////////
app.use("/", router)
//////////////////////////////////////////

app.listen(process.env.PORT, console.log("The server is up!"))