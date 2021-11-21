const { Router } = require('express');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post');

const commentsController = (req, res) => res.send('comments works');

const postRouter = new Router();

postRouter.route('/').get(getPosts).post(createPost);

postRouter.route('/:postId').put(updatePost).delete(deletePost);

postRouter.route('/:postId/comments').get(commentsController);

module.exports = postRouter;
