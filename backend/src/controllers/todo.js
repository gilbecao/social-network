const Todo = require('../models/todo');

async function createTodo({ body }, res) {
  try {
    const newtodo = await Todo.create(body);
    res.json(newtodo);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createTodo,
};
