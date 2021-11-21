const { Router } = require('express');
const { getAlbums } = require('../controllers/album');
const { getPhotos } = require('../controllers/photo');

const albumRouter = new Router();

albumRouter.route('/').get(getAlbums);

albumRouter.route('/:albumId').get(getAlbums);

albumRouter.route('/:albumId/photos').get(getPhotos);

module.exports = albumRouter;
