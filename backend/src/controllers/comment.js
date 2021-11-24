const commentService = require('../services/comment');


async function createComment({ body }, res) {
  try {
    const newComent = await commentService.createComment(body);
    res.json(newComent);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createComment,
};
