 
function triangleArea(a, b, c) {
  var side1 = 7;
  var side2 = 5;
  var side3 = 8;
  var s = (side1 + side2 + side3) / 2;
  var Area = (s * (s - side1) * (s - side2) * (s - side3)) ** 0.5; {
   return Area; 
  }
}
