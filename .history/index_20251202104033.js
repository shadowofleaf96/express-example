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

app.put("/users/:id", (req, res) => {
  let userId = parseInt(req.params.id);
  let updatedInfos = req.body;
  let userIndex = users.findIndex((user) => user.id === userId);

app.listen(3000, () => console.log("Server running"));
