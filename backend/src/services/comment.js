const Comment = require('../models/comment');

function getComments(query) {
  return Comment.find(query);
}

module.exports = {
  getComments,
};
