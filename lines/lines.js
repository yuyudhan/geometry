var findAngle = function(point1, point2) {
  // this function calculates the angle created by an imaginary line segment drawn from point1 to point2, assuming the base of x-axis is 0
  // console.log(point1);

  var angle = Math.atan((point2.y - point1.x) / (point2.x - point1.x));

  return angle;
};

var getAngleBetweenTwoLines = function(point1, point2, point3, point4) {
  // Calculates the angle between imaginary lines drawn between point1 to point2 and point3 to point4
  var angle1 = findAngle(point1, point2);
  var angle2 = findAngle(point3, point4);

  return angle2 - angle1;
};

var checkSide = function(point1, point2, pointToCheck) {
  // Accepts two points and draws and imaginary line segment going from point1 to point2
  // Then tells which side of the line is this point on

  var requiredAngle = getAngleBetweenTwoLines(point1, point2, point2, pointToCheck);

  if (requiredAngle < 0) {
    return 'right'
  } else if (requiredAngle == 0) {
    return 'online';
  } else {
    return 'left';
  }
};

module.exports = {};
module.exports.lines = {};
module.exports.lines.findAngle = findAngle;
module.exports.lines.checkSide = checkSide;
