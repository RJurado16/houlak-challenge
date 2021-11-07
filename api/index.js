const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const { PORT } = require('./utils/config/');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', require('./routes'));

// Error catching endware
server.use((err, req, res, next) => {
  const status = err?.status || 401;
  const msg = err?.msg || 'Internal Server Error';
  res.status(status).send(msg);
});

server.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});