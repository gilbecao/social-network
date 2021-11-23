const userService = require('../../services/user');

async function createUser({ body }, res) {
  try {
    const newUser = await userService.createUser(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getUsers(req, res) {
  try {
    const response = await userService.getUsers();
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getUserById(req, res) {
  try {
    const { userId } = req.params;
    const response = await userService.getUserById(userId);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateUserById({ body, params: { userId } }, res) {
  try {
    const response = await userService.updateUserById(userId, body);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteUserById(req, res) {
  try {
    const { userId } = req.params;
    await userService.deleteUserById(userId);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
