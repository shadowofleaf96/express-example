const express = require("express");
const app = express();

const userRoutes = require("../routes/userRoutes");
const errorHandler = require("../middleware/errorHandler");

// Load routes
app.use("/users", userRoutes);

// Register error-handling middleware at the END
app.use(errorHandler);

app.listen(3000, () => console.log("Server running"));
