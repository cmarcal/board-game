"use strict";
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  User = require("./models/user/userModel"),
  bodyParser = require("body-parser");

require("./models/user/userModel");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Bordgamesdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require("./routes/user/userRoutes");
userRoutes(app);
app.listen(port);

app.use(function (req: any, res: any) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

console.log("board game RESTful API server started on: " + port);
