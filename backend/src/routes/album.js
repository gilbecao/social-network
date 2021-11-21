const { Router } = require('express');
const { getAlbums, getOneAlbumById } = require('../controllers/album');
const { getAlbumPhotos } = require('../controllers/album/photos');

const albumRouter = new Router();

albumRouter.route('/').get(getAlbums);

albumRouter.route('/:albumId').get(getOneAlbumById);

albumRouter.route('/:albumId/photos').get(getAlbumPhotos);

module.exports = albumRouter;
