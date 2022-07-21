const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('hello!')
})

const recipeRouter = require('./recipe/recipeRouter')
server.use('/api/recipes', recipeRouter)

server.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json(err)
})

module.exports = server;