
const userController = require("../controllers/user.controller")

module.exports = app =>{
    app.post("/api/register", userController.register)
}
