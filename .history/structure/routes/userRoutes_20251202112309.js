const express = require("express");
const router = express.Router();

// Load controller functions
const userController = require("../controllers/userController");

// GET /users
router.get("/", userController.getAllUsers);

// GET /users/profile
router.get("/profile", userController.getUserProfile);

// POST /users
router.post("/", userController.createUser);
// PUT /users/:id


// Export router
module.exports = router;
