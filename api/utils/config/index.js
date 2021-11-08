require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  SPOTIFY_API: 'https://api.spotify.com/v1',
};