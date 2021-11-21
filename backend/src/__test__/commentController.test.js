const axios = require('axios');
const { getComments } = require('../controllers/comments');

jest.mock('axios');

describe('Given controllers/comments', () => {
  describe('When getComments resolves', () => {
    test('Then respond with and array of {postId, id, name, email, body}', async () => {
      const response = {
        data: [
          {
            postId: 1,
            id: 1,
            name: 'title',
            email: 'email',
            body: 'body'
          }
        ]
      };

      const req = {
        url: '',
        params: { postId: 1 }
      };
      const res = {
        json: jest.fn()
      };

      axios.get.mockResolvedValue(response);

      await getComments(req, res);

      expect(res.json).toHaveBeenCalledWith(response.data);
    });
  });

  describe('When getComments rejects', () => {
    test('Then respond with 500', async () => {
      const error = {
        message: 'error'
      };

      const req = {
        url: '',
        params: { postId: 1 }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      axios.get.mockRejectedValue(error);

      await getComments(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(error);
    });
  });
});
