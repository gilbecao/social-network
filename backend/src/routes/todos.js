const { Router } = require('express');
const { createTodo } = require('../controllers/todo');

const router = new Router();

router.route('/').post(createTodo);

module.exports = router;
