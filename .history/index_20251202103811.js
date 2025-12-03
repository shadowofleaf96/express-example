const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send("Hello World");
});

app.post("")

app.listen(3000, () => console.log("Server running"));
