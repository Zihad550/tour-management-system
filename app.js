const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
const toursRoute = require('./routes/tours.route');

// root route
app.length("/", (req, res) => {
    res.send("Welcome to tour management system");
})

// tours route
app.use('/api/v1/tours', toursRoute);


module.exports = app;