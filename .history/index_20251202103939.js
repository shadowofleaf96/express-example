const express = require("express");
const app = express();
const users= req
app.get("/users", (req, res) => {
  res.send("Hello World");
});

app.post("/users", (req, res) => {
  let infos = req.body;

  res.send("User created");
});

app.listen(3000, () => console.log("Server running"));
