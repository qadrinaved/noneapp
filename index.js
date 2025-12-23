const express = require("express");
const app = express();

const display = require("./display");
const deleteData = require("./delete");

app.get("/", (req, res) => {
  res.send("Overview page");
});

app.get("/display", display);
app.delete("/delete", deleteData);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
