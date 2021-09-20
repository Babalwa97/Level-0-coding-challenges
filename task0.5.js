var a = 7;
var b = 5;
var c = 8;
var s = (a + b + c) / 2; // s is a semiperimeter
var Area = (s * (s - a) * (s - b) * (s - c)) ** 0.5; // To calculate the area of a triangle using sides
function triangleArea(a, b, c) {
  return Area;
}

console.log(triangleArea(a, b, c));
