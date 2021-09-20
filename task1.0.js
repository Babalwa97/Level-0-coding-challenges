function commonChars(str1, str2) {
  var str1 = "bottle";
  var str2 = "chocolate";
  var common = "";
  if (str1.length < str2.length) {
    for (var i = 0; i < str1.length; i++) {
      if (str2.includes(str1[i])) {
        if (!common.includes(str1[i])) {
          common += str1[i];
        }
      }
    }
  } else {
    for (var n = 0; n < str2.length; n++) {
      if (str1.includes(str2[i])) {
        if (!common.includes(str2[i])) {
          common += str2[i];
        }
      }
    }
  }
  console.log("Common letters: ", common);
  return common;
}
commonChars();
