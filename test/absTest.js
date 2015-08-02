var expect = require('chai').expect;
var abs = require('../lib/abs');

describe('Absolute value', function () {
  describe('positive numbers', function () {
    it('returns itself (int)', function () {
      var val = abs(1);
      expect(val).to.equal(1);
    });
    it('returns itself (float)', function () {
      var val = abs(2.5);
      expect(val).to.equal(2.5);
    });
  });

  describe('negative numbers', function () {
    it('returns the number\'s distance from zero (int)', function () {
      var val = abs(-1);
      expect(val).to.equal(1);
    });
    it('returns the number\'s distance from zero (float)', function () {
      var val = abs(-3.14);
      expect(val).to.equal(3.14);
    })
  });

  describe('Zero', function () {
    it('returns zero (int)', function () {
      expect(abs(0)).to.equal(0);
    });
    it('returns zero (float)', function () {
      expect(abs(0.0)).to.equal(0.0);
    })
  })
});