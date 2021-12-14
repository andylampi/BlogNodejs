const { post } = require("../config/db")
const asyncHandler = require("express-async-handler")

const printYoungsPost = asyncHandler(async(req, res) => {
    let youngPost = await post.find()
    const Post = []
    let lenghtPost = youngPost.length -1 
    for(let x = 0; x <= 5 ; x++){
        Post.push(youngPost[lenghtPost])
        lenghtPost -= 1
    }
    console.log("///////////////")
    console.log(Post)
    let authIsTrue = req.cookies.auth
    if(authIsTrue == 0 || authIsTrue == "undefined"){
        res.render("index", {status : "Log In", routeStatus : "/auth/login/", Post:Post})
    }
    else{
        console.log(authIsTrue)
        res.render("index", {status : "Profile", routeStatus : "/auth/profile/", Post:Post})
    }
    
})

module.exports = printYoungsPost