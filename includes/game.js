/*
********************************************************
*                       GAME SETUP
********************************************************
*/
module.exports = function(sockets) {
   var self     = {};
   self.sockets = sockets;
   self.start   = function() {
      self.config    = new (require('./game.config.js'))();
      self.data      = new (require('./game.data.js'))();
      self.utilities = new (require('./game.utilities.js'))();
      self.mechanics = new (require('./game.mechanics.js'))(self.config, self.data, self.utilities, self.sockets);
      self.callbacks = new (require('./game.callbacks.js'))(self.config, self.data, self.utilities, self.mechanics, self.sockets);
      self.interval  = setInterval(self.mechanics.loop, self.config.updateRate);
   };
   self.stop = function() {
      clearInterval(self.interval);
      delete require.cache[require.resolve('./game.config.js')];
      delete require.cache[require.resolve('./game.data.js')];
      delete require.cache[require.resolve('./game.utilities.js')];
      delete require.cache[require.resolve('./game.mechanics.js')];
      delete require.cache[require.resolve('./game.callbacks.js')];
   };
   self.restart = function() {
      self.stop();
      self.start();
   };
   return self;
};
