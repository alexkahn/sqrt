var expect = require('chai').expect;
var improve = require('../lib/improve');

describe('Improve', function () {
  it('returns the average of a value and itself as a proportion of a target value', function() {
    expect(improve(1,4)).to.equal(2.5);
  });
  it('gradually improves', function() {
    var step1 = improve(1,2);
    var step2 = improve(step1, 2);
    var step3 = improve(step2, 2);
    expect(step1).to.equal(1.5);
    expect(step2).to.be.closeTo(1.4167, 0.01);
    expect(step3).to.be.closeTo(1.414215, 0.01);
  });
});
