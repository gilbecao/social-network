const axios = require('axios');

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

module.exports = {
  getAlbums,
  getAlbumById,
};
