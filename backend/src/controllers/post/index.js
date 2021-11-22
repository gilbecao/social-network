const axios = require('axios');
const Post = require('../../models/post');

const postUrl = `${process.env.API_URL}/posts`;

function mapPostAuthor(posts) {
  const promises = posts.map((post) =>
    axios.get(`${process.env.API_URL}/users/${post.userId}`)
  );

  return Promise.all(promises);
}

async function getPosts(req, res) {
  try {
    const { data } = await axios.get(`${postUrl}${req.url}`);
    const authors = await mapPostAuthor(data);

    const postData = data.map((post, index) => ({
      ...post,
      author: authors[index].data,
    }));

    res.json(postData);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createPost({ body }, res) {
  try {
    const newPost = await Post.create(body);
    res.json(newPost);
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
        'Content-type': 'application/json; charset=UTF-8',
      },
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
  deletePost,
};
