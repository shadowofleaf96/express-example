const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send("Hello World");
});

app.post("/users", (req, res) => {
    
  res.send("User created");
});

app.listen(3000, () => console.log("Server running"));
