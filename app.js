const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Middleware qui permet de traiter les donnees de la requete
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connection a la db
connectDB();

//app.use("/foods", require("./routes/foods.routes.js"));

module.exports = app;
