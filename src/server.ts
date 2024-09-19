const express = require("express");
const app = express();

app.use(express.static("client"));

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(3000);
