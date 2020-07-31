const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Donors = require("../models/donate");

const DonorsRouter = express.Router();

DonorsRouter.use(bodyParser.json());

DonorsRouter.route("/")

  .get((req, res) => {
    Donors.find(req.query).then((Donors) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(Donors);
    });
  })
  .post((req, res) => {
    Donors.create(req.body).then((Donor) => {
      console.log(Donor);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(Donor);
    });
  });

module.exports = DonorsRouter;
