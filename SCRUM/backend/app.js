const express = require("express");

const app = express();

app.use(express.json());

const mongoose = require("mongoose");

const CarRoutes = require("./routes/car.routes.js");
const path = require("path");
const Car = require("./models/car.model");

mongoose.connect(
        'mongodb://127.0.0.1:27017/Cars', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => console.log(`Connetcted to ${mongoose.connection.name} Database`))
    .catch(err => console.log(`\nConnection Error \n\n${err}`));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/api", CarRoutes);


module.exports = app;