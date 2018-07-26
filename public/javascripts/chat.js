io = require('socket.io');


function Chat(socket) {
  this.socket = socket;
}

Chat.prototype.sendMsg = function(room, msg) {
  this.socket.emit('message', { text: msg, room})
}

module.exports = Chat;