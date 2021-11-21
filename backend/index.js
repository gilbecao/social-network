const express = require('express');
require('dotenv').config();
const debug = require('debug')('socialNetwork');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/database');

const server = express();
const port = process.env.PORT || 5001;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/user');

server.use('/api/users', userRouter);

const postRouter = require('./src/routes/post');

server.use('/api/posts', postRouter);

server.listen(port, () =>
  debug(`Server is running on ${chalk.red(`http://localhost:${port}`)}`)
);
