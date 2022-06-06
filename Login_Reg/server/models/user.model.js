//1. IMPORT DEPENDECIES
const mongoose = require("mongoose")
// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
// this should go after 

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User Name is required"],
        minlength: [3, "User Name must be more than 3 characters"],
        maxlength: [20, "User Name must be less than 20 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
}, { timestamps: true })

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

UserSchema.virtual('confirmPassword')
.get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

module.exports.User = mongoose.model("User", UserSchema)