const express = require('express');
require('dotenv').config();
const debug = require('debug')('socialNetwork');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/ddbbConfig');

const server = express();
const port = process.env.PORT || 5001;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRouter');

server.use('/api', userRouter);

server.listen(port, () =>
  debug(`Server is running on ${chalk.red(`http://localhost:${port}`)}`)
);
