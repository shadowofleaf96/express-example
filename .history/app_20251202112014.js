const express = require("express");
const app = express();

const userRoutes = require("../routes/userRoutes");
const errorHandler = require("../middleware/errorHandler");

app.use("/users", userRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server running"));
