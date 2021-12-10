const logoutUser = (req, res) => {
    res.cookie('auth', 0);
    res.cookie('username', 0);
    console.log(req.cookies)
    res.send("ok")
}

module.exports = logoutUser