const express = require("express");
const app = express();
const users = require("./structure/models/userModel");

app.get("/users", (req, res) => {
  res.send(users);
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
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedInfos };
    res.send("User updated");
  } else {
    res.status(404).send("User not found");
  }
});

app.delete("/users/:id", (req, res) => {
  let userId = parseInt(req.params.id);
  let userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.send("User deleted");
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(3000, () => console.log("Server running"));
