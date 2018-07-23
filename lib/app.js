const express = require('express');
const app = express();
const path = require("path");
const io = require('socket.io-client');
const socket = io('http://localhost');
const server = require('./chatServer');
// console.log(socket);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../index.html'));
})

app.listen(3000, () => 'listening on port 3000');
// server.listen();