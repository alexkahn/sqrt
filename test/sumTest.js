var expect = require('chai').expect;
var sum = require('../lib/sum');

describe('Sum', function() {
  it('adds two numbers', function () {
    expect(sum(1,2)).to.equal(3);
  });
});