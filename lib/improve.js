var average = require('./average');

module.exports = function improve (current, previous) {
  var prop = previous/current;
  return average(current, prop);
};