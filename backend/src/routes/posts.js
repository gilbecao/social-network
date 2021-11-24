const { Router } = require('express');
const {
  getPosts,
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostComments,
} = require('../controllers/post');

const router = new Router();

router.route('/').get(getPosts).post(createPost);

router
  .route('/:postId')
  .get(getPostById)
  .put(updatePostById)
  .delete(deletePostById);

router.route('/:postId/comments').get(getPostComments);

module.exports = router;
