const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}`);
});
