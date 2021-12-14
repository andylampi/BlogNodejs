const { post } = require("../config/db")
const pug = require("pug")

const creationPost = (req,res) =>{
    let date = new Date()
    username = req.cookies.username
    console.log(username)
    if( req.query.title != undefined && req.query.text != undefined){
        let firstPost = new post({
        title : req.query.title,
        text : req.query.text,
        created_at : date.getTime(),
        author : req.cookies.id
    })
    firstPost.save((error)=>{
        if(error) return console.log(error)
        res.status(200).redirect("/")
    })
    }
    else{
        res.send("Post don't create")
    }
    

}

module.exports = creationPost