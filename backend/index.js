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

const users = require('./src/routes/users');
const posts = require('./src/routes/posts');
const albums = require('./src/routes/albums');
const comments = require('./src/routes/comments');
const todos = require('./src/routes/todos');
const photos = require('./src/routes/photos');

server.use(`/api/${version}/users`, users);
server.use(`/api/${version}/posts`, posts);
server.use(`/api/${version}/albums`, albums);
server.use(`/api/${version}/comments`, comments);
server.use(`/api/${version}/todos`, todos);
server.use(`/api/${version}/photos`, photos);

server.listen(port, () =>
  debug(`Server is running on ${chalk.red(`http://localhost:${port}`)}`)
);
