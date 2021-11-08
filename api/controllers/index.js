const axios = require('axios');
const { SPOTIFY_API } = require('../utils/config');
const { getArtist, getAlbumsPopularity, getToken } = require('./helpers/spotify');

const getArtistAlbums = async (req, res, next) => {
  if (req.query.artist) {
    try {
      const accessToken = await getToken();
      
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
      };

      const artistId = await getArtist(headers, req.query.artist);

      const result = await axios.get(`${SPOTIFY_API}/artists/${artistId}/albums?limit=50`, { headers });

      const resultTypeAlbum = result.data.items.filter(el => el.album_type === 'album' && el.album_group === 'album');
      const albumIds = resultTypeAlbum.map(el => el.id);

      const sortedAlbums = await getAlbumsPopularity(headers, albumIds);

      return res.json(sortedAlbums);

    } catch(err) {
      next(err)
    }
  }
}

module.exports = {
  getArtistAlbums
}