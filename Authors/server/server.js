// 1a. IMPORT YOUR DEPENDECIES
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000
const mongoose = require('mongoose');

// 1.5a CONFIGURE YOUR MONGOOSE
require("./config/mongoose.config")


// 2a. CONFIGURE YOUR EXPRESS
app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// 3a. ATTACH ROUTES TO YOUR EXPRESS SERVER
const authorRoutes = require("./routes/author.route")
authorRoutes(app)


// 4a. RUN YOUR EXPRESS SERVER
app.listen( port, () => console.log(`Listening on port: ${port}`) );