"use strict";
const express = require("express");
const app = express();
app.use(express.static("client"));
app.get("/a", (req, res) => {
    res.send("A");
});
app.listen(3000);
