var port    = 80;//                                     game sockets port
var sockets = require('socket.io')(port).sockets;//     game sockets
var game    = require('./includes/game.js')(sockets);// game setup
game.start();//                                         start game
