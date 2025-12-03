const express = require("express");
const app = express();
const users = require("./structure/models/userModel");

app.get("/users", (req, res) => {
  res.send("Hello World");
});

app.post("/users", (req, res) => {
  let infos = req.body;
  users.push(infos);
  res.send("User created");
});

app.put

app.listen(3000, () => console.log("Server running"));
