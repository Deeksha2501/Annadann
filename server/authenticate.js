var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("./models/user");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens

var config = require("./config/keys");

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser((user, done) => {
  //console.log(user)
  done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  User.findById(_id).then((user) => {
    done(null, user);
  });
});

exports.getToken = function(user) {
  return jwt.sign(user, config.jwt.secretOrKey, { expiresIn: 3600 });
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt.secretOrKey;

exports.jwtPassport = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("JWT payload: ", jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) {
        return done(err, false);
      } else if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
