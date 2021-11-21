const { model, Schema } = require('mongoose');

const albumSchema = Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
});

module.exports = model('Album', albumSchema);
