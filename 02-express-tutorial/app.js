const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public")); // gets every resource in the public folder

// app.get("/", (req, res) => {
// home page
// res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR - service side rendering
// });

app.all("*", (req, res) => {
  // if every code above does not get used, use this one (error)
  res.status(404).send("resourse not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});

// 5:13:49
