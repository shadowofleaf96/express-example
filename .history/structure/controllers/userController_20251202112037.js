// Import the users "model" (array of users)
const users = require("../models/userModel");

// Controller #1: Return all users
exports.getAllUsers = (req, res) => {
  // Send the list of users as a JSON response
  res.json(users);
};

// Controller #2: Return a simple profile message
exports.getUserProfile = (req, res) => {
  // Send a JSON response with a message
  res.json({ message: "Profile page" });
};

exports.createUser = (req, res) => {}