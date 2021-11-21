const { Router } = require('express');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post');

const { getComments } = require('../controllers/post/comment');

const postRouter = new Router();

postRouter.route('/').get(getPosts).post(createPost);

postRouter.route('/:postId').put(updatePost).delete(deletePost);

postRouter.route('/:postId/comments').get(getComments);

module.exports = postRouter;
