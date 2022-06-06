// IMPORT THE MODEL FROM YOUR MODEL.JS
const { User } = require("../models/user.model")
// USE THIS FUNCTION TO TEST THE ROUTES AND TEST THE SERVER
module.exports.test = (req, res) => {
    res.json("hello world")
}

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.status(400).json(err));
}