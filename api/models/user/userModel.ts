"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

const UserSchema = new Schema({
  userId: {
    type: String,
    default: uuid.v4(),
  },
  firstName: {
    type: String,
    required: "Enter the name of user",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: "Enter the ne-mail fo user",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
