const { Router } = require('express');
const {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../controllers/user');

const { getAlbums } = require('../controllers/user/album');
const { getTodos } = require('../controllers/user/todo');
const { getPosts } = require('../controllers/user/post');

const router = new Router();

router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router.route('/:userId/albums').get(getAlbums);
router.route('/:userId/todos').get(getTodos);
router.route('/:userId/posts').get(getPosts);

module.exports = router;
