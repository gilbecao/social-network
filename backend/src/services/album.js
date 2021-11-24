const Album = require('../models/album');

function getAlbums(query) {
  return Album.find(query);
}

function getAlbumById(query) {
  return Album.findOne({ id: query });
}

module.exports = {
  getAlbums,
  getAlbumById,
};
