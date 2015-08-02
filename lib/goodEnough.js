var abs = require('./abs');
var square = require('./square');

module.exports = function goodEnough (guess, x) {
  return abs( square(guess) - x ) < 0.001;
};