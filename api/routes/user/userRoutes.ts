"use strict";

module.exports = (app: any) => {
  const user = require("../../controllers/user/userController");

  app
    .route("/profile")
    .get(user.getProfile)
    .post(user.createProfile)
    .delete(user.deleteProfile);
};
