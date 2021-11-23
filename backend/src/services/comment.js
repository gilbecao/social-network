const Comment = require('../models/comment');

function createComment(body) {
  return Comment.create(body);
}

function getComments(query) {
  return Comment.find(query);
}

module.exports = {
  createComment,
  getComments,
};
