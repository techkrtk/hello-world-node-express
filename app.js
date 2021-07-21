var express = require("express");
var app = express();

// Routes
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/ping", function (req, res) {
  res.send("Pong");
});

app.get("/ping/ping", function (req, res) {
  res.send("Pong pong");
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on localhost:" + port);
