const Post = require('../models/post');

function createPost(body) {
  return Post.create(body);
}

function getPosts(query) {
  return Post.find(query);
}

function getPostById(query) {
  return Post.findOne({ id: query });
}

function updatePostById(query, body) {
  return Post.findOneAndUpdate({ id: query }, body);
}

function deletePostById(query) {
  return Post.findOneAndDelete({ id: query });
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePostById,
  deletePostById
};
