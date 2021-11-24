const { Router } = require('express');
const {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserAlbums,
  getUserPosts,
  getUserTodos
} = require('../controllers/user');

const router = new Router();

router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router.route('/:userId/albums').get(getUserAlbums);
router.route('/:userId/posts').get(getUserPosts);
router.route('/:userId/todos').get(getUserTodos);

module.exports = router;
