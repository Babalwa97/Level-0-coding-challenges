var a = 70; // Temperature of choice
var b = a * (9 / 5) + 32; // To convert Celsius to Fahrenheit
var c = a + "\xB0C is " + b + " \xB0F.";

function celToFah() {
  console.log(c);
}
console.log(celToFah());

var d = 80; // Temperature of choice
var e = (d - 32) * (5 / 9); // To convert Fahrenheit to Celsius
var f = d + "\xB0F is " + e + " \xB0C.";

function fahToCel() {
  console.log(f);
}
console.log(fahToCel());
