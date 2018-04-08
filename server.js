var port    = 80;
var sockets = require('socket.io')(port).sockets;
var game    = require('./includes/game.js')(sockets);
game.start();
//game.stop();
//game.restart();
