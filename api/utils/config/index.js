require('dotenv').config();

module.exports = {
  DB_USER: process.env.DB_USER || 'postgres',
  DB_NAME: process.env.DB_NAME || 'houlak_challenge',
  DB_PASS: process.env.DB_PASSWORD || '1234',
  DB_HOST: process.env.HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '5432',
  PORT: process.env.PORT || 3001,
  SPOTIFY_API: 'https://api.spotify.com/v1',
};