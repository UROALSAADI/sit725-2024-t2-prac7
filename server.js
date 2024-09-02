const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
