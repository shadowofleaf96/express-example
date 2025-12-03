const express = require("express");
const router = express.Router();

// Load controller functions
const userController = require("../controllers/userController");

// GET /users
router.get("/users", userController.getAllUsers);

// GET /users/profile
router.get("/users/profile", userController.getUserProfile);

// POST /users
router.post("/users", userController.createUser);
// PUT /users/:id
router.put("/users/:id", userController.updateUser);

// DELETE /users/:id
router.delete("/users/:id", userController.deleteUser);

// Export router
module.exports = router;
