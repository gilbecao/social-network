const axios = require('axios');
const { getAlbumPhotos } = require('../controllers/album/photos');

jest.mock('axios');

describe('Given a photoController', () => {
  describe('When getAlbumPhotos resolves', () => {
    test('Then respond with and array of {albumId, id, title, url, thumbnailUrl}', async () => {
      const response = {
        data: [
          {
            albumId: 2,
            id: 51,
            title: 'non sunt voluptatem placeat consequuntur rem incidunt',
            url: 'https://via.placeholder.com/600/8e973b',
            thumbnailUrl: 'https://via.placeholder.com/150/8e973b'
          }
        ]
      };

      const req = { url: '', params: { albumId: 2 } };
      const res = { json: jest.fn() };

      axios.get.mockResolvedValue(response);

      await getAlbumPhotos(req, res);

      expect(res.json).toHaveBeenCalledWith(response.data);
    });
  });

  describe('When getAlbumPhotos rejects', () => {
    test('Then respond with 500', async () => {
      const error = {
        message: 'error'
      };

      const req = {
        url: '',
        params: { albumId: 1 }
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };

      axios.get.mockRejectedValue(error);

      await getAlbumPhotos(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith(error);
    });
  });
});
