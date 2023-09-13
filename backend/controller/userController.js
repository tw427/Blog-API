const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.user_list_get = asyncHandler(async (req, res, next) => {
  const userList = await User.find({}, "username").sort({ username: 1 }).exec();

  res.json(userList);
});

exports.user_create_post = [
  // Sanitize and Validate sign up fields
  body("username", "Username 3 characters min.")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body("password", "Password 4 characters min.")
    .trim()
    .isLength({ min: 4 })
    .escape(),
  body("confrimPassword", "Password 4 characters min.")
    .trim()
    .isLength({ min: 4 })
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match!");
      }
      return true;
    })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ error: errors.array() });
    }

    // Check if User already exists
    const existingUser = await User.find({
      username: req.body.username,
    }).exec();
    if (existingUser) {
      return res.status(400).json({
        error: "Username already exists.",
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(401).json({
        error: "Passwords must match!",
      });
    }

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) return next(err);

      const user = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await user.save();

      jwt.sign(
        { user: user },
        process.env.REFRESH_KEY,
        { expiresIn: "5m" },
        (err, token) => {
          if (err) return next(err);

          return res.status(200).json({
            token,
            user: {
              username: user.username,
            },
            message: "Success! Account created.",
          });
        }
      );
    });
  }),
];

exports.user_delete_post = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();

  if (user === null) {
    return res.status(400).json({
      message: "User does not exist!",
    });
  }

  jwt.verify(req.token, process.env.REFRESH_KEY, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      await User.findByIdAndRemove(req.params.id);
      return res.status(200).json({
        message: "Success! User deleted.",
        authData,
      });
    }
  });

  await User.findByIdAndRemove(req.params.id);
  res.status(200).json({
    message: "Success! User deleted.",
  });
});

exports.user_login_post = asyncHandler(async (req, res, next) => {
  const user = await User.find(
    { username: req.body.username },
    "username"
  ).exec();

  if (user === null) {
    return res.status(400).json({
      message: "User does not exist!",
    });
  }

  jwt.sign(
    { user: user },
    process.env.REFRESH_KEY,
    { expiresIn: "5m" },
    (err, token) => {
      if (err) return next(err);

      return res.status(200).json({
        token,
        user: {
          username: user.username,
        },
        message: "Success! Logged in.",
      });
    }
  );
});
