const { Router } = require('express');
const {
  getAlbums,
  getAlbumById,
  createAlbum,
  getAlbumPhotos
} = require('../controllers/album');

const router = new Router();

router.route('/').get(getAlbums).post(createAlbum);

router.route('/:albumId').get(getAlbumById);

router.route('/:albumId/photos').get(getAlbumPhotos);

module.exports = router;
