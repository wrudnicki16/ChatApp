const io = require('socket.io');

let chat;

function createChat(server) {
  const chat = io(server);

  chat.on('connection', (socket) => {
    console.log('connected');
    // socket.on('message', message => {
    //   socket.broadcast.to(message.room).emit('message', { text: `${message}`});
    // })

    // socket.join('room 237', () => {
    //   let rooms = Object.keys(socket.rooms);
    //   console.log(rooms);
    // })
  })
  chat.emit('message', { text: 'this is a text' })
}

module.exports = { listen(server) { createChat(server) } };