const axios = require('axios');

const { getUsers, getUserById, createUser } = require('../controllers/user');
const User = require('../models/user');
const userMock = require('../mocks/user');

jest.mock('../models/user');
jest.mock('axios');

let req;
let res;

describe('Given createUser function', () => {
  beforeEach(() => {
    req = { userMock };
    res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
  });
  describe('When is invoked', () => {
    describe('And User.create resolves', () => {
      test('Then res.json is called', async () => {
        User.create.mockResolvedValue({});

        await createUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status is called', async () => {
        User.create.mockRejectedValue([]);

        await createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        User.create.mockRejectedValue(new Error('FIND_ERROR'));

        await createUser(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});

describe('Given getUsers function', () => {
  describe('When resolves', () => {
    test('Then res.json is called', async () => {
      req = {};
      res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
      axios.get.mockResolvedValue({ data: [] });

      await getUsers(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When rejects', () => {
    test('Then res.status is called', async () => {
      req = {};
      res = {
        status: jest.fn(),
        send: jest.fn()
      };
      axios.get.mockRejectedValue([]);

      await getUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
    test('Then res.send is called with FIND_ERROR', async () => {
      req = {};
      res = {
        status: jest.fn(),
        send: jest.fn()
      };
      axios.get.mockRejectedValue(new Error('FIND_ERROR'));

      await getUsers(req, res);

      expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
    });
  });
});

describe('Given getUserById function', () => {
  describe('When resolves', () => {
    test('Then res.json is called', async () => {
      req = { params: { userId: 1 } };
      res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
      axios.get.mockResolvedValue({ data: {} });

      await getUserById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When rejects', () => {
    test('Then res.status is called', async () => {
      req = { params: { userId: 1 } };
      res = {
        status: jest.fn(),
        send: jest.fn()
      };
      axios.get.mockRejectedValue([]);

      await getUserById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
    test('Then res.send is called with FIND_ERROR', async () => {
      req = { params: { userId: 1 } };
      res = {
        status: jest.fn(),
        send: jest.fn()
      };
      axios.get.mockRejectedValue(new Error('FIND_ERROR'));

      await getUserById(req, res);

      expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
    });
  });
});
