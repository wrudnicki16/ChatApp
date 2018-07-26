const Chat = require('./chat')

function ChatUI(socket) {
  this.chat = new Chat(socket);
  this.store = document.localStorage;
  this.msgList = document.querySelector('ul#msg-list')
}

ChatUI.prototype.getInput = function() {
  return this.input.value
}

ChatUI.prototype.emitUserMsg = function() {
  this.chat.sendMessage(room, this.getInput());
}

ChatUI.prototype.displayIncMsg = function(msg) {
  const newMessage = document.createElement('li');
  newMessage.textContent = msg;
  this.msgList.appendChild(newMessage);
}