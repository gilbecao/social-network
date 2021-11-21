const { model, Schema } = require('mongoose');

const commentSchema = Schema({
  postId: String,
  id: Number,
  name: String,
  email: String,
  body: String
});

module.exports = model('Comment', commentSchema);
