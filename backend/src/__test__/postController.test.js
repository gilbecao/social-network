const axios = require('axios');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post');

jest.mock('axios');

describe('Given controllers/post', () => {
  describe('When getPosts resolves', () => {
    test('Then respond with and array of {userId, title and body}', async () => {
      const response = {
        data: [
          {
            userId: 1,
            title: 'title',
            body: 'body'
          }
        ]
      };

      const req = {
        url: ''
      };
      const res = {
        json: jest.fn()
      };

      axios.get.mockResolvedValue(response);

      await getPosts(req, res);

      expect(res.json).toHaveBeenCalledWith(response.data);
    });
  });

  describe('When getPosts rejects', () => {
    test('Then respond with 500', async () => {
      const error = {
        message: 'error'
      };

      const req = {
        url: ''
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      axios.get.mockRejectedValue(error);

      await getPosts(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(error);
    });
  });
});
