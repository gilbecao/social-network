const axios = require('axios');
// const Album = require('../models/album');

async function getAlbums(req, res) {
  try {
    const { data } = await axios.get(`${process.env.API_URL}albums${req.url}`);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAlbums
};
