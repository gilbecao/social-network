const { Router } = require('express');
const { createUser } = require('../controllers/user');

const router = new Router();

router.route('/signup').post(createUser);

module.exports = router;
