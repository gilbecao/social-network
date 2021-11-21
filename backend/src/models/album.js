const { model, Schema } = require('mongoose');

const albumSchema = Schema({
  userId: Number,
  id: Number,
  title: String
});

module.exports = model('Album', albumSchema);
