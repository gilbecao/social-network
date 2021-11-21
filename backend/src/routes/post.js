const { Router } = require('express');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post');

const postRouter = new Router();

postRouter.route('/').get(getPosts).post(createPost);
postRouter.route('/:postId').put(updatePost).delete(deletePost);

module.exports = postRouter;
