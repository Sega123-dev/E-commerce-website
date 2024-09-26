"use strict";
const express = require("express");
const app = express();
app.use(express.static("client"));
require("dotenv").config();
const path = require("path");
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/login", "login.html"));
});
app.get("/men", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/men", "men.html"));
});
app.get("/women", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/women", "women.html"));
});
app.listen(3000);
function countryFetch() {
    fetch(`https://ipinfo.io/json?token=${process.env.IP_INFO_TOKEN}`).then((response) => response
        .json()
        .then((data) => {
        console.log(data);
    })
        .catch((error) => {
        console.error(error);
    }));
}
countryFetch();
