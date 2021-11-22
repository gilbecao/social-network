const axios = require('axios');

const userUrl = `${process.env.API_URL}users`;

async function getAlbums(req, res) {
  const { userId } = req.params;
  try {
    const { data } = await axios(`${userUrl}/${userId}/albums`);
    res.status(200);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAlbums
};
