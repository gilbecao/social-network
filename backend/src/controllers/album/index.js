const axios = require('axios');
const Album = require('../../models/album')

const albumUrl = `${process.env.API_URL}/albums`;

async function getAlbums(req, res) {
  try {
    const { data } = await axios.get(`${albumUrl}${req.url}`);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getAlbumById(req, res) {
  try {
    const { data } = await axios.get(`${albumUrl}${req.url}`);
    res.json(data);
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

module.exports = {
  getAlbums,
  getAlbumById,
  createAlbum
};
