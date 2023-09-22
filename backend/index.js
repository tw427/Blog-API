require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("./models/user");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");
const userRouter = require("./routes/users");

const secretPhrase = process.env.REFRESH_KEY;

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_SECRET;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const app = express();

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user, {
        message: "Logged In Successfully",
      });
    } catch (err) {
      return done(err);
    }
  })
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.REFRESH_KEY,
    },
    async function (jwtPayload, cb) {
      try {
        const user = await User.findOne({ id: jwtPayload.sub });
        if (user) {
          return cb(null, user);
        } else {
          return null, false;
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  session({
    secret: secretPhrase,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/post", postRouter);
// app.use("/api/:postId/comments", commentRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => console.log("Server started on 3000"));

module.exports = app;
