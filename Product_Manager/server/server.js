//1. IMPORT YOUR DEPENDECIES
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000
const mongoose = require('mongoose');

//1.5 CONFIGURE YOUR MONGOOSE
require("./config/mongoose.config")

//2. CONFIGURE YOUR EXPRESS
app.use(cors()) // ALLOWS FOR REACT/EXPRESS TO COMMUNICATE
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//3. ATTACH ROUTES TO YOUR EXPRESS SERVER
const productRoutes = require("./routes/product.route")
productRoutes(app)


//4. RUN YOUR EXPRESS SERVER 
app.listen( port, () => console.log(`Listening on port: ${port}`) );