// Entry point for SERVER JavaScript

const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

// Any routes or other various middlewares should go here!

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});
