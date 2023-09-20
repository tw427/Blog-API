require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("./models/user");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");
const userRouter = require("./routes/users");
const jwtStrategy = require("./jwt");

const secretPhrase = process.env.REFRESH_KEY;

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_SECRET;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

passport.use(jwtStrategy);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(
  session({
    secret: secretPhrase,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/api", (req, res, next) => {
  if (req.user) {
    return res.json(req.user);
  }

  return res.json("nouser");
});

app.use("/api/post", postRouter);
// app.use("/api/:postId/comments", commentRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => console.log("Server started on 3000"));

module.exports = app;
