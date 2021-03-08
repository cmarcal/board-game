"use strict";
import express from "express";
import mongoose from "mongoose";
import initUserSchema from "./models/user/userModel";
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const cors = require("cors");

initUserSchema();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Bordgamesdb");

app.use(function ({}, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require("./routes/user/userRoutes");
userRoutes(app);
app.listen(port);

console.log("board game RESTful API server started on: " + port);
