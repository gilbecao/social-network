const axios = require('axios');

const postUrl = `${process.env.API_URL}/posts`;

async function getPosts(req, res) {
  try {
    const { data } = await axios.get(`${postUrl}${req.url}`);
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createPost(req, res) {
  try {
    const data = req.body;
    const response = await axios.post(`${postUrl}`, data, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updatePost(req, res) {
  try {
    const { postId } = req.params;
    const data = req.body;
    const response = await axios.put(`${postUrl}/${postId}`, data, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deletePost(req, res) {
  try {
    const { postId } = req.params;
    await axios.delete(`${postUrl}/${postId}`);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost
};
