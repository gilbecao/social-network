const { Router } = require('express');
const { createPhoto } = require('../controllers/photo');

const router = new Router();

router.route('/').post(createPhoto);

module.exports = router;
