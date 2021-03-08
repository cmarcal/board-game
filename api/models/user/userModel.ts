"use strict";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    default: uuidv4(),
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

export default function initUserSchema(): void {
  mongoose.model("User", UserSchema);
}
