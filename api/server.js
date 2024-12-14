const express = require('express')

const server = express()

server.use(express.json())

//server.use('/api/?', ?)

server.get('/', (req, res) => {
    res.send(`Everything going as planned`);
  });

module.exports = server 