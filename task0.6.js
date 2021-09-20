function maximumNumber(num1, num2, num3) { 
  var num1 = 11;
  var num2 = 22;
  var num3 = 6;
  
  if ((num1 > num2) & (num1 > num3)) {
    return num1;
  } else if ((num2 > num3) & (num2 > num1)) {
    return num2;
  } else if ((num3 > num1) & (num3 > num2)) {
    return num3;
  }
}
