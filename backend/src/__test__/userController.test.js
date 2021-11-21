const userController = require('../controllers/user');
const User = require('../models/user');
const userMock = require('../mocks/user');

jest.mock('../models/user');

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

        await userController.createUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.create rejects', () => {
      test('Then res.status is called', async () => {
        User.create.mockRejectedValue([]);

        await userController.createUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then res.send is called with FIND_ERROR', async () => {
        User.create.mockRejectedValue(new Error('FIND_ERROR'));

        await userController.createUser(req, res);

        expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
      });
    });
  });
});
