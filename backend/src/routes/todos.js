const { Router } = require('express');
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodoById,
  deleteTodoById,
} = require('../controllers/todo');

const router = new Router();

router.route('/').get(getTodos).post(createTodo);

router
  .route('/:todoId')
  .get(getTodoById)
  .put(updateTodoById)
  .delete(deleteTodoById);


module.exports = router;
