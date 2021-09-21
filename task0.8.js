function numberToHours(number) {
  var h = "minute";
  var i = "minutes";
  var j = "hour";
  var k = "hours";
  var minutes = number % 60;
  var hours = Math.floor(number / 60);
  
  if ((hours <= 1) & (minutes <= 0)) {
    return hours + j;
  } else if ((hours <= 0) & (minutes <= 1)) {
    return minutes + h;
  } else if ((hours <= 1) & (minutes <= 1)) {
    return hours + j + "," + " " + minutes + h;
  } else if ((hours <= 1) & (minutes > 1)) {
    return hours + j + "," + " " + minutes + i;
  } else if ((hours >= 2) & (minutes <= 1)) {
    return hours + k + "," + " " + minutes + h;
  } else {
    return hours + k + "," + " " + minutes + i;
  }
}
