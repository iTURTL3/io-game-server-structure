/*
********************************************************
*                     GAME UTILITIES
********************************************************
*/
module.exports = function() {
   var self         = {};
   self.PI          = Math.PI;
   self.PIR         = self.PI / 180;
   self.randomFloat = function(min, max) {
      return Math.random() * (max - min) + min;
   };
   self.randomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };
   self.randomArrayValue = function(array) {
      return array[self.randomInt(0, array.length - 1)];
   };
   self.randomRadiansAngle = function(min, max) {
      return self.randomInt(min, max) * self.PIR;
   };
   self.randomRadiusLocation = function(inRadius, minRadius, maxRadius) {
      var angle = self.randomRadiansAngle(0, 360);
      return [
         Math.floor(inRadius + Math.cos(angle) * self.randomInt(minRadius, maxRadius)),
         Math.floor(inRadius + Math.sin(angle) * self.randomInt(minRadius, maxRadius))
      ];
   };
   self.direction = function(x1, y1, x2, y2) {
      return Math.atan2(y1 - y2, x1 - x2);
   };
   self.distance = function(x1, y1, x2, y2) {
      return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
   };
   self.isVisible = function(x1, y1, x2, y2, viewDistance) {
      return (self.distance(x1, y1, x2, y2) < viewDistance ? true : false);
   };
   self.isBoolean = function(value) {
      return (typeof value == 'boolean' ? true : false);
   };
   self.isString = function(value) {
      return (typeof value == 'string' ? true : false);
   };
   self.isNumber = function(value) {
      return (typeof value == 'number' ? true : false);
   };
   self.isFloat = function(value) {
      return (self.isNumber(value) && Math.floor(value) !== value ? true : false);
   };
   self.isArray = function(value) {
      return (value instanceof Array ? true : false);
   };
   self.floatToFixed = function(value, places) {
      return (self.isFloat(value) ? Number(value.toFixed(places)) : value);
   };
   self.sortBy = function(array, key, descending) {
      return array.sort(function(a, b) {
         return (descending ? b[key] - a[key] : a[key] - b[key]);
      });
   };
   self.findBy = function(array, key, value) {
      for ( var i = 0; i < array.length; i++ ) {
         if ( array[i][key] == value ) {
            return array[i];
         }
      }
   };
   self.deleteBy = function(array, key, value) {
      for ( var i = 0; i < array.length; i++ ) {
         if ( array[i][key] == value ) {
            array.splice(i, 1);
            break;
         }
      }
   };
   self.nextId = function(array, min) {
      array = self.sortBy(array, 'id');
      min   = min || 1;
      array.every(function(value) {
         if ( min == value.id ) {
            ++min;
            return true;
         }
      });
      return min;
   };
   return self;
};
