const logoutUser = (req, res) => {
    res.cookie('auth', 0);
    res.cookie('username', 0);
    console.log(req.cookies)
    res.redirect("/")
}

module.exports = logoutUser