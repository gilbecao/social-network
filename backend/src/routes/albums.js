const { Router } = require('express');
const {
  getAlbums,
  getAlbumById,
  createAlbum,
} = require('../controllers/album');
const { getAlbumPhotos } = require('../controllers/album/photos');

const router = new Router();

router.route('/').get(getAlbums).post(createAlbum);

router.route('/:albumId').get(getAlbumById);

router.route('/:albumId/photos').get(getAlbumPhotos);

module.exports = router;
