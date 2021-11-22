const { Router } = require('express');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostComments,
} = require('../controllers/post');

const router = new Router();
router.route('/').get(getPosts).post(createPost);
router.route('/:postId').put(updatePost).delete(deletePost);
router.route('/:postId/comments').get(getPostComments);

module.exports = router;
