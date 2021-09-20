function returnVowels(string) {
  return Array.prototype.filter
    .call(string, (char) => "aeiouAEIOU".includes(char))
    .join("");
}

console.log(returnVowels("Operator"));
