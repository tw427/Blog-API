require("dotenv").config();
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userController = require("../controller/userController");
const { verifyToken } = require("../../utils/verifyToken");

// // Create User
// router.get("/sign-up");
// router.post("/sign-up", userController.user_create_post);

// // Delete User
// router.get("/delete/:userId");
router.post("/delete", verifyToken, userController.user_delete_post);

// Verify the authorization of our user
router.post("/auth", verifyToken, userController.user_check_auth);

// Login
router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something went wrong!",
        user: user,
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user.toJSON(), process.env.REFRESH_KEY, {
        expiresIn: "60m",
      });
      return res.json({ user, token });
    });
  })(req, res);
});
// // Get a list of Users
// router.get("/list", userController.user_list_get);

module.exports = router;
