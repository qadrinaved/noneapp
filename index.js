const express = require("express");
const app = express();

const display = require("./display");
const dgetData = require("./products");

app.get("/", (req, res) => {
  res.send("Overview page");
});

app.get("/display", display);
app.get("/products", dgetData);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
