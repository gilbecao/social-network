const { Router } = require('express');
const { getUsers, getUserById } = require('../controllers/user');

const { getAlbums } = require('../controllers/user/album');
const { getTodos } = require('../controllers/user/todo');
const { getPosts } = require('../controllers/user/post');

const userRouter = new Router();

userRouter.route('/').get(getUsers);
userRouter.route('/:userId').get(getUserById);
userRouter.route('/:userId/albums').get(getAlbums);
userRouter.route('/:userId/todos').get(getTodos);
userRouter.route('/:userId/posts').get(getPosts);

module.exports = userRouter;
