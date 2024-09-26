const express = require("express");
const app = express();
app.use(express.static("client"));

app.get("/login", (req: any, res: any): void => {
  res.send("Login");
});
app.get("/men", (req: any, res: any): void => {
  res.send("Men");
});
app.get("/women", (req: any, res: any): void => {
  res.send("Women");
});
app.listen(3000);
