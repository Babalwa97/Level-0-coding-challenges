function returnVowels(string) {
  return ("Vowels: " + Array.prototype.filter
    .call(string, (char) => "aeiouAEIOU".includes(char))
    .join("");
}
