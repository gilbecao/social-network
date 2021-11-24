const todoService = require('../services/todo');

async function createTodo({ body }, res) {
  try {
    const newTodo = await todoService.createTodo(body);
    res.json(newTodo);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getTodos(req, res) {
  try {
    const response = await todoService.getTodos();
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getTodoById(req, res) {
  try {
    const { todoId } = req.params;
    const response = await todoService.getTodoById(todoId);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateTodoById({ body, params: { todoId } }, res) {
  try {
    const response = await todoService.updateTodoById(todoId, body);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteTodoById(req, res) {
  try {
    const { todoId } = req.params;
    await todoService.deleteTodoById(todoId);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
