const fs = require("fs");
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

exports.createUser = (req, res) => {
  let infos = req.body;
  users.push(infos);
  fs.writeFileSync(
    "./models/userModel.js",
    `const users = ${JSON.stringify(
      users,
      null,
      2
    )};\n\nmodule.exports = users;`
  );
  console.log(users);
  res.send("User created");
};

exports.updateUser = (req, res) => {
  let userId = parseInt(req.params.id);
  let updatedInfos = req.body;
  let userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedInfos };
    fs.writeFileSync(
      "./models/userModel.js",
      `const users = ${JSON.stringify(
        users,
        null,
        2
      )};\n\nmodule.exports = users;`
    );
    res.send("User updated");
  } else {
    res.status(404).send("User not found");
  }
};

exports.deleteUser = (req, res) => {
  let userId = parseInt(req.params.id);
  let userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    fs.writeFileSync(
      "./models/userModel.js",
      `const users = ${JSON.stringify(
        users,
        null,
        2
      )};\n\nmodule.exports = users;`
    );
    res.send("User deleted");
  } else {
    res.status(404).send("User not found");
  }
};
