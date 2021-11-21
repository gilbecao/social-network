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

  describe('When createPost resolves', () => {
    test('Then respond with {userId, title and body}', async () => {
      const response = {
        data: {
          userId: 1,
          title: 'title',
          body: 'body'
        }
      };

      const req = {
        body: {
          userId: 1,
          title: 'title',
          body: 'body'
        }
      };
      const res = {
        json: jest.fn()
      };

      axios.post.mockResolvedValue(response);

      await createPost(req, res);

      expect(res.json).toHaveBeenCalledWith(response.data);
    });
  });

  describe('When createPost rejects', () => {
    test('Then respond with 500', async () => {
      const error = {
        message: 'error'
      };

      const req = {
        body: {
          userId: 1,
          title: 'title',
          body: 'body'
        }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      axios.post.mockRejectedValue(error);

      await createPost(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(error);
    });
  });

  describe('When updatePost resolves', () => {
    test('Then respond with {userId, title and body}', async () => {
      const response = {
        data: {
          userId: 1,
          title: 'title',
          body: 'body'
        }
      };

      const req = {
        params: {
          postId: 1
        },
        body: {
          userId: 1,
          title: 'title',
          body: 'body'
        }
      };
      const res = {
        json: jest.fn()
      };

      axios.put.mockResolvedValue(response);

      await updatePost(req, res);

      expect(res.json).toHaveBeenCalledWith(response.data);
    });
  });

  describe('When updatePost rejects', () => {
    test('Then respond with 500', async () => {
      const error = {
        message: 'error'
      };

      const req = {
        params: {
          postId: 1
        },
        body: {
          userId: 1,
          title: 'title',
          body: 'body'
        }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      axios.put.mockRejectedValue(error);

      await updatePost(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(error);
    });
  });

  describe('When deletePost resolves', () => {
    test('Then respond with {userId, title and body}', async () => {
      const req = {
        params: {
          postId: 1
        }
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      };

      await deletePost(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('When deletePost rejects', () => {
    test('Then respond with 500', async () => {
      const error = {
        message: 'error'
      };

      const req = {
        params: {
          postId: 1
        }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      axios.delete.mockRejectedValue(error);

      await deletePost(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(error);
    });
  });
});
