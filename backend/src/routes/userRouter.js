const { Router } = require('express');
const { createUser } = require('../controllers/userController');

const userRouter = new Router();

userRouter
  .route('/signup')
  .post(createUser);

module.exports = userRouter;
