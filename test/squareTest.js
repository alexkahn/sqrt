var expect = require('chai').expect;
var square = require('../lib/square');

describe('Square', function () {
  describe('Positive number', function () {
    it('returns a positive number', function() {
      expect(square(2)).to.be.above(0);
      expect(square(2)).to.equal(4);
    })
  });
  describe('Negative number', function () {
    it('returns a positive number', function () {
      expect(square(-2)).to.be.above(0);
      expect(square(-2)).to.equal(4);
    });
  });
});