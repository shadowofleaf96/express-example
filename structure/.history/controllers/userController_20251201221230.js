const users = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserProfile = (req, res) => {
  res.json({ message: "Profile page" });
};
