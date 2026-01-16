const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorize.js");

// req => middleware => res
// app.use([logger, authorize]); // order matters, execution follows the order

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(4000, () => {
  console.log("Server is listening on port 5000");
});


// 6:34:40
