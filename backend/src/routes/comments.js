const { Router } = require('express');
const { createComment } = require('../controllers/comment');

const router = new Router();

router.route('/').post(createComment);

module.exports = router;
