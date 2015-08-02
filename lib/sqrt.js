var goodEnough = require('./goodEnough');
var improve = require('./improve');

module.exports = function sqrt(guess, x) {
  if (goodEnough(guess, x)) {
    return guess;
  } else {
    return sqrt( improve(guess, x), x );
  }
};