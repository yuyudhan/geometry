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


describe('Checking if the  direction of point function works or not', function() {
  it('Should say right when the point is on right', function() {
    var gotSideOfLine = lines.checkSide({
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 7,
      y: 5
    });
    expect(gotSideOfLine).to.equal('right');
  });
  it('Should say left when the point is on left', function() {
    var gotSideOfLine = lines.checkSide({
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 5,
      y: 7
    });
    expect(gotSideOfLine).to.equal('left');
  });
  it('Should say on the line when on the line', function() {
    var gotSideOfLine = lines.checkSide({
      x: 2,
      y: 2
    }, {
      x: 3,
      y: 3
    }, {
      x: 5,
      y: 5
    });
    expect(gotSideOfLine).to.equal('online');
  });
});
