const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controller/userController");
const { verifyToken } = require("../../utils/verifyToken");

// // Create User
// router.get("/sign-up");
// router.post("/sign-up", userController.user_create_post);

// // Delete User
// router.get("/delete/:userId");
// router.post("/delete/:userId", verifyToken, userController.user_delete_post);

// Login
router.post(
  "/login",
  passport.authenticate("local", {
    session: true,
  }),
  userController.user_login_post
);

// // Get a list of Users
// router.get("/list", userController.user_list_get);

module.exports = router;
