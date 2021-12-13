const logoutUser = (req, res) => {
    res.cookie('auth', undefined);
    res.cookie('username', undefined);
    console.log(req.cookies)
    res.redirect("/")
}

module.exports = logoutUser