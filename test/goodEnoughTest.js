var expect = require('chai').expect;
var goodEnough = require('../lib/goodEnough');

describe('Good Enough?', function () {
  it('returns a boolean', function () {
    expect(typeof goodEnough(1, 2)).to.equal('boolean');
  });
  describe('Tolerance', function () {
    it('returns false if not within tolerance', function() {
      expect(goodEnough(1,2)).to.equal(false);
    });
    it('returns true if it is within tolerance', function() {
      expect(goodEnough(1.41421356, 2)).to.equal(true);
    });
  });
});