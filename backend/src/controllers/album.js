const Album = require('../models/album');
const albumService = require('../services/album');

async function getAlbums(req, res) {
  try {
    const response = await albumService.getAlbums();
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAlbumById(req, res) {
  try {
    const { albumId } = req.params;
    const response = await albumService.getAlbumById(albumId);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createAlbum({ body }, res) {
  try {
    const newAlbum = await Album.create(body);
    res.json(newAlbum);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAlbumPhotos(req, res) {
  try {
    const { albumId } = req.params;
    const response = await albumService.getAlbums({ albumId });
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAlbums,
  getAlbumById,
  createAlbum,
  getAlbumPhotos,
};
