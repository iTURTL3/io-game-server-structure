/*
********************************************************
*                       GAME DATA
********************************************************
*/
module.exports = function() {
   var self         = this;
   self.serverStart = Date.now();
   self.loopLast    = self.serverStart;
   self.loopNow     = self.serverStart;
   self.loopDelta   = 1;
   self.gameTime    = [];
   self.leaderboard = [];
   self.players     = [];
};
