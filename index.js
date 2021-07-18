const app = require("express")();

app.get("/", (req, res) => {
  res.json({ msg: "Hello runnig in a docker container" });
});
app.get("/:id", (req, res) => {
  res.json({
    msg: "Hello runnig in a docker container",
    welcome: `Hi! ${req.params.id}`,
  });
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log("server listning on port " + port));
