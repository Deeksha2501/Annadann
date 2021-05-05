var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var User = require("../models/user");
var passport = require("passport");
var authenticate = require("../authenticate");
router.use(bodyParser.json());
router.post("/signup", (req, res, next) => {
  // console.log("Hii !! nfjkernfkvrnkfvrk");
  console.log({ username: req.body.username, password: req.body.password })
  User.register(
    new User({ username: req.body.username, password: req.body.password, contactNumber : req.body.contactNumber, name : req.body.name }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        if (req.body.name) {
          user.name = req.body.name;
          user.contactNumber = req.body.contactNumber;
          user.organisation = req.body.organisation;
        }
        user.save((err, user) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ err: err });
            return;
          }
          passport.authenticate("local")(req, res, () => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({ success: true, status: "Registration Successful!" });
          });
        });
      }
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  console.log(req.user);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token: token,
    user: req.user,
    status: "You are successfully logged in!",
  });
});

router.get("/logout", (req, res) => {
  console.log("Deeksha");
  req.logout();
  res.redirect("https://annadanngo.herokuapp.com/");
});

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
