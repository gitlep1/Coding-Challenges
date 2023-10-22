// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  let posCount = 0;
  let negSum = 0;

  for (const num of input) {
    if (num > 0) {
      posCount++;
    } else {
      negSum += num;
    }
  }

  return [posCount, negSum];
}
