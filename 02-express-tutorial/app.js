const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false })); // access to form values
// parse json
app.use(express.json()); // handle incoming data

app.use("/api/people", people); // all the routers are coming in

app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// 8:16:38
