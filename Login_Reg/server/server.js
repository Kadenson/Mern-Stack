// 1a. IMPORT YOUR DEPENDECIES
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const dot = require("dotenv").config();
const secretKey = process.env.FIRST_SECRET_KEY;

// 1.5a CONFIGURE YOUR MONGOOSE
require("./config/mongoose.config")


// 2a. CONFIGURE YOUR EXPRESS
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(cookieParser());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// 3a. ATTACH ROUTES TO YOUR EXPRESS SERVER
const userRoutes = require("./routes/user.route")
userRoutes(app)


// 4a. RUN YOUR EXPRESS SERVER
app.listen( port, () => console.log(`Listening on port: ${port}`) );