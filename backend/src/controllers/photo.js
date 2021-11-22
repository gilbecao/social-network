const Photo = require('../models/photo');

async function createPhoto({ body }, res) {
  try {
    const newPhoto = await Photo.create(body);
    res.json(newPhoto);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createPhoto,
};
