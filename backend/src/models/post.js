const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  id: Number,
  title: String,
  body: String,
  userId: Number,
});

module.exports = model('Post', postSchema);
