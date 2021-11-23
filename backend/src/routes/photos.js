const { Router } = require('express');
const { createPhoto, getPhotos, getPhotoById } = require('../controllers/photo');

const router = new Router();

router.route('/').get(getPhotos).post(createPhoto);

router.route('/:photoId').get(getPhotoById);

module.exports = router;
