const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running"));
