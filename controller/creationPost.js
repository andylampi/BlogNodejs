const { post } = require("../config/db")
const pug = require("pug")

const creationPost = (req,res) =>{
    let date = new Date()
    if( req.query.title != undefined && req.query.text != undefined){
        let firstPost = new post({
        title : req.query.title,
        text : req.query.text,
        created_at : date.getTime(),
        user : req.user._id

    })
    firstPost.save((error)=>{
        if(error) return console.log(error)
        res.status(200).send("post created")
    })
    }
    else{
        res.send("Post don't create")
    }
    

}

module.exports = creationPost