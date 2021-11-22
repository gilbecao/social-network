const axios = require('axios');

async function getAlbumPhotos(req, res) {
  try {
    const { albumId } = req.params;
    const { data } = await axios.get(
      `${process.env.API_URL}/album/${albumId}/photos`
    );
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAlbumPhotos
};
