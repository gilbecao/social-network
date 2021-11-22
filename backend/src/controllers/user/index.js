const { default: axios } = require('axios');
const User = require('../../models/user');

const userUrl = `${process.env.API_URL}/users`;

async function getUsers(req, res) {
  try {
    const { data } = await axios.get(`${userUrl}${req.url}`);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getUserById(req, res) {
  try {
    const { data } = await axios.get(`${userUrl}/${req.params.userId}`);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser
};
