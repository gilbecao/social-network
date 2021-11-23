const Photo = require('../models/photo');

function createPhoto(body) {
  return Photo.create(body);
}

function getPhotos(query) {
  return Photo.find(query);
}

function getPhotoById(query) {
  return Photo.findOne({ id: query });
}

module.exports = {
  createPhoto,
  getPhotos,
  getPhotoById
};
