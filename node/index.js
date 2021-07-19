const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("sdf");
});

app.get("/classes", (req, res) => {
  res.json("this is all class");
});

app.get("/classes/:classid", (req, res) => {
  res.json("class id is " + req.params.classid);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("server listning on port " + port));
