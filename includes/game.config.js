/*
********************************************************
*                   GAME CONFIGURATION
********************************************************
*/
module.exports = function() {
   var self             = this;
   self.updateRate      = 1000 / 60;
   self.dayDifference   = 1000 * 60 * 60 / 24;
   self.leaderboardSize = 10;
};
