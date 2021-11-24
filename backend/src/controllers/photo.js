const photoService = require('../services/photo');

async function createPhoto({ body }, res) {
  try {
    const newPhoto = await photoService.createPhoto(body);
    res.json(newPhoto);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getPhotos(req, res) {
  try {
    const response = await photoService.getPhotos();
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getPhotoById(req, res) {
  try {
    const { photoId } = req.params;
    const response = await photoService.getPhotoById(photoId);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createPhoto,
  getPhotos,
  getPhotoById
};
