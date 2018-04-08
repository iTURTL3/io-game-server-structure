/*
********************************************************
*                       GAME DATA
********************************************************
*/
module.exports = function() {
   var self         = {};
   self.serverStart = Date.now();
   self.loopLast    = Date.now();
   self.loopNow     = Date.now();
   self.loopDelta   = 1;
   self.gameTime    = [];
   self.leaderboard = [];
   self.players     = [];
   return self;
};
