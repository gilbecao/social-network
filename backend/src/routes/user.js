const { Router } = require('express');
const { getUsers, getUserById } = require('../controllers/user');

const albumsController = (req, res) => res.send('user albums works');
const todosController = (req, res) => res.send('user todos works');
const postsController = (req, res) => res.send('user posts works');

const userRouter = new Router();

userRouter.route('/').get(getUsers);
userRouter.route('/:userId').get(getUserById);
userRouter.route('/:userId/albums').get(albumsController);
userRouter.route('/:userId/todos').get(todosController);
userRouter.route('/:userId/posts').get(postsController);

module.exports = userRouter;
