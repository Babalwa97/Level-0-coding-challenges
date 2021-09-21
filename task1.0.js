function commonCharacters(string1, string2) {
  var common = "";
  if (string1.length < string2.length) {
    for (var i = 0; i < string1.length; i++) {
      if (string2.includes(string1[i])) {
        if (!common.includes(string1[i])) {
          common += string1[i];
        }
      }
    }
  } else {
    for (var n = 0; n < string2.length; n++) {
      if (string1.includes(string2[i])) {
        if (!common.includes(string2[i])) {
          common += string2[i];
        }
      }
    }
  }
  console.log("Common letters: ", common);
  return common;
}
