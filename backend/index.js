const express = require('express');
require('dotenv').config();
const debug = require('debug')('socialNetwork');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/database');

const server = express();
const version = process.env.VERSION || 'v1';
const port = process.env.PORT || 5001;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/user');
const postRouter = require('./src/routes/post');
const albumRouter = require('./src/routes/album');

server.use(`/api/${version}/users`, userRouter);
server.use(`/api/${version}/posts`, postRouter);
server.use(`/api/${version}/albums`, albumRouter);

server.listen(port, () =>
  debug(`Server is running on ${chalk.red(`http://localhost:${port}`)}`)
);
