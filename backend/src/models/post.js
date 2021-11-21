const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  id: Number,
  title: String,
  body: String,
  userId: Number
});

module.exports = model('Post', userSchema);
