const express = require("express");
const session = require("express-session");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const promisify = require("es6-promisify");
const router = require("./router/router");
const passport = require("passport");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());
app.use(cookieParser());


//routing the app happened in here
app.use("/api", router);

module.exports = app;