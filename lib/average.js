var sum = require('./sum');

module.exports = function average (x,y) {
  return sum(x,y) / 2;
}