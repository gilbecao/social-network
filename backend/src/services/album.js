const Album = require('../models/album');

function createAlbum(body) {
  return Album.create(body);
}

function getAlbums(query) {
  return Album.find(query);
}

function getAlbumById(query) {
  return Album.findOne({ id: query });
}

module.exports = {
  createAlbum,
  getAlbums,
  getAlbumById,
};
