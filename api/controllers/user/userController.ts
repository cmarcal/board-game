"use strict";
import mongoose from "mongoose";
const User = mongoose.model("User");

export const getProfile = (
  {},
  res: {
    send: (arg0: any) => any;
    json: (arg0: mongoose.Document<any, {}>[]) => void;
  }
) => {
  User.find({}, (err, user) => {
    err && res.send(err);
    res.json(user);
  });
};

export const createProfile = (
  req: { body: any },
  res: {
    send: (arg0: mongoose.NativeError) => any;
    json: (arg0: mongoose.Document<any, {}>) => void;
  }
) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    err && res.send(err);
    res.json(user);
  });
};

export const deleteProfile = (
  req: { params: { userId: any } },
  res: {
    send: (arg0: mongoose.NativeError) => any;
    json: (arg0: { message: string }) => void;
  }
) => {
  User.remove({ _id: req.params.userId }, (err) => {
    err && res.send(err);
    res.json({ message: "User successfully deleted" });
  });
};
