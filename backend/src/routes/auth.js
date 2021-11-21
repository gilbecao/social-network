const { Router } = require('express');
const { createUser } = require('../controllers/user');

const authRouter = new Router();

authRouter.route('/signup').post(createUser);

module.exports = authRouter;
