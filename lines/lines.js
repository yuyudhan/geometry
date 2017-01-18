var findAngle = function(point1, point2) {
  // this function calculates the angle created by an imaginary line segment drawn from point1 to point2, assuming the base of x-axis is 0
  // console.log(point1);
  var angle = Math.atan((point2.y - point1.x) / (point2.x - point1.x));

  return angle;
};

module.exports = {};
module.exports.lines = {};
module.exports.lines.findAngle = findAngle;
