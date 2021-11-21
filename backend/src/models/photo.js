const { model, Schema } = require('mongoose');

const photoSchema = Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
});

module.exports = model('Photo', photoSchema);
