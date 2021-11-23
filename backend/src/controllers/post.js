const commentService = require('../services/comment');
const postService = require('../services/post');

async function createPost({ body }, res) {
  try {
    const newPost = await postService.createPost(body);
    res.json(newPost);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getPosts(req, res) {
  try {
    const response = await postService.getPosts();
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getPostById(req, res) {
  try {
    const { postId } = req.params;
    const response = await postService.getPostById(postId);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updatePostById({ body, params: { postId } }, res) {
  try {
    const response = await postService.updatePostById(postId, body);
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deletePostById(req, res) {
  try {
    const { postId } = req.params;
    await postService.deletePostById(postId);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getPostComments(req, res) {
  try {
    const { postId } = req.params;
    const response = await commentService.getComments({ postId });
    res.json(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePostById,
  deletePostById,
  getPostComments,
};
