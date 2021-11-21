const axios = require('axios');

async function getComments(req, res) {
  try {
    const { postId } = req.params;
    const { data } = await axios.get(
      `${process.env.API_URL}posts/${postId}/comments`
    );
    res.json(data);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getComments
};
