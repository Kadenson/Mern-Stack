const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be longer than 3 characters"],
        maxLength: [30, "Name is to long"]
    }
},{timestamps: true})

module.exports.Author = mongoose.model("Author", authorSchema)