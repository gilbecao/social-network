const axios = require('axios');
const photo = require('../models/photo');

async function getPhotos(req, res) {
  try {
    const { albumId } = req.params;
    const { data } = await axios.get(
      `${process.env.API_URL}album/${albumId}/photos`
    );
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getPhotos
};
