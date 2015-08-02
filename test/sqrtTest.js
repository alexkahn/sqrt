var expect = require('chai').expect;
var sqrt = require('../index.js');

describe('Square Root', function() {
  it('returns the sqrt of a positive integer', function() {
    var result = sqrt(1,4);
    expect(result).to.be.closeTo(2, 0.001);
  });
});
