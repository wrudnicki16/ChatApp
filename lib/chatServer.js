const server = require('socket.io');

function createChat(server) {
  const io = server();

  io.on('connection', (socket) => {
    console.log('connected');
    // socket.on('message', message => {
    //   io.emit('message', { text: `${message}`});
    // })

    // socket.join('room 237', () => {
    //   let rooms = Object.keys(socket.rooms);
    //   console.log(rooms);
    // })
  })
  io.emit('message', { text: 'this is a text' })
}

module.exports = { listen: (server) => createChat };