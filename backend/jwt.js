require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.REFRESH_KEY;

module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
  User.findOne({ username: jwt_payload.username }, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});
