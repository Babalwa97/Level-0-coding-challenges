function returnVowels(string) {
  return Array.prototype.filter
    .call(string, (char) => "aeiouAEIOU".includes(char))
    .join("");
}
