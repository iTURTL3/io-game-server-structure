/*
********************************************************
*                   GAME CONFIGURATION
********************************************************
*/
module.exports = function() {
   var self             = {};
   self.updateRate      = 1000 / 60;
   self.dayDifference   = 1000 * 60 * 60 / 24;
   self.dayBonus        = 100;
   self.leaderboardSize = 10;
   return self;
};
