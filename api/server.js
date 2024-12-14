const express = require('express')

const moviesRouter = require('./movie/router')

const server = express()

server.use(express.json())

server.use('/api/movies', moviesRouter)

server.get('/', (req, res) => {
    res.send(`Everything going as planned`);
});

  server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server 