"use strict";
const express = require("express");
const app = express();
app.use(express.static("client"));
app.get("/login", (req, res) => {
  res.send("Log In page");
});
app.get("/men", (req, res) => {
  res.send("Men");
});
app.get("/women", (req, res) => {
  res.send("Women");
});
app.listen(3000);
