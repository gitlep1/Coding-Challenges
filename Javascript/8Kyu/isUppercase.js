// Codewars link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Solution:
String.prototype.isUpperCase = function () {
  for (const char of this) {
    if (char !== char.toUpperCase()) return false;
  }
  return true;
};
