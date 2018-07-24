const express = require('express');
const app = express();
const path = require("path");
const http = require('http').Server(app);

const chatServer = require('./lib/chatServer');
chatServer.listen(http);

const PORT = 8000;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
})

http.listen(PORT, () => `listening on port ${PORT}  `);
// server.listen();