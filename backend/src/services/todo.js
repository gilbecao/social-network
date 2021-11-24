const Todo = require('../models/todo');

function createTodo(body) {
  return Todo.create(body);
}

function getTodos(query) {
  return Todo.find(query);
}

function getTodoById(query) {
  return Todo.findOne({ id: query });
}

function updateTodoById(query, body) {
  return Todo.findOneAndUpdate({ id: query }, body);
}

function deleteTodoById(query) {
  return Todo.findOneAndDelete({ id: query });
}

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById
};
