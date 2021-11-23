const User = require('../models/user');

function createUser(body) {
  return User.create(body);
}

function getUsers(query) {
  return User.find(query);
}

function getUserById(query) {
  return User.findOne({ id: query });
}

function updateUserById(query, body) {
  return User.findOneAndUpdate({ id: query }, body);
}

function deleteUserById(query) {
  return User.findOneAndDelete({ id: query });
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
