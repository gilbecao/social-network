const { Router } = require('express');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post');

const userRouter = new Router();

userRouter.route('/').get(getPosts).post(createPost);
userRouter.route('/:postId').put(updatePost).delete(deletePost);

module.exports = userRouter;
