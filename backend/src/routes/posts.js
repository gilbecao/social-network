const { Router } = require('express');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/post');

const { getComments } = require('../controllers/post/comment');

const router = new Router();
router.route('/').get(getPosts).post(createPost);
router.route('/:postId').put(updatePost).delete(deletePost);
router.route('/:postId/comments').get(getComments);

module.exports = router;
