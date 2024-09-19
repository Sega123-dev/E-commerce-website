const express = require("express");
const app = express();

app.use(express.static("client"));

app.get("/a", (req: any, res: any): void => {
  res.send("A");
});
app.listen(3000);
