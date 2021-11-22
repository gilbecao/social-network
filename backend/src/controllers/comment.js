const Comment = require('../models/comment');

async function createComment({ body }, res) {
  try {
    const newComent = await Comment.create(body);
    res.json(newComent);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createComment,
};
