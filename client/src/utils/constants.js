require('dotenv').config();

const BASE_URL = `${process.env.REACT_APP_BE_URL}:${process.env.REACT_APP_BE_PORT}/`

module.exports = {
  BASE_URL: BASE_URL || `http://localhost:3001/`
};