var a = 11;
var b = 22;
var c = 6;
function maximumNumber(a, b, c) {
  if ((a > b) & (a > c)) {
    return a;
  } else if ((b > c) & (b > a)) {
    return b;
  } else if ((c > a) & (c > b)) {
    return c;
  }
}
console.log(maximumNumber(a, b, c));
