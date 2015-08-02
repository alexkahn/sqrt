var expect = require('chai').expect;
var average = require('../lib/average');

describe('Average', function () {
  describe('Same type', function () {
    it('returns the mean (int)', function() {
      expect(average(2,4)).to.equal(3);
    });
    it('returns the mean (float)', function () {
      expect(average(3.2, 9.0)).to.equal(6.1);
    });
  });

  describe('Mixed type', function () {
    it('returns the mean', function() {
      expect(average(6.5,2)).to.equal(4.25);
    });
  });
});