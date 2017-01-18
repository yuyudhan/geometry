var chai = require('chai');

var expect = chai.expect;
var should = chai.should;

var lines = require('../../lines/lines.js').lines;

describe('Checking if the get angle function works or not', function() {
  it('Should say correct angles for points given', function() {
    var gotAngle = lines.findAngle({
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    });
    expect(gotAngle).to.equal(Math.PI / 4);
  });
});
