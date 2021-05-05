const express = require("express"),
  http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
require("dotenv").config();
var keys = require("./config/keys");
const cookieSession = require("cookie-session");
const PORT = process.env.PORT || 4000;
const dbUrl =
  process.env.DB_URL ||
  "mongodb+srv://Arpitat:at135790@cluster0.y7qgk.mongodb.net/annadan?retryWrites=true&w=majority";

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const auth = require("./routes/users");
const donor = require("./routes/donateRouter");

const app = express();
app.use(cors());

app.use(morgan("dev"));
//app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: false,
  })
);
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);
app.use(bodyParser.json({ limit: "5mb" }));

app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
require("./authenticate");

const uri = dbUrl;

const connect = mongoose.connect(uri, {
  useNewUrlParser: true,
});

connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.error(err);
  }
);

app.use("/auth", auth);
app.use("/donate", donor);


app.get("*", (req, res) => {
  // res.send("Hello!, server is running")
  console.log('object');
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// app.get("/", (req, res)=>{
//   res.send("hey");
// })

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});
