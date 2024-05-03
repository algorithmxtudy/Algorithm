function kidsWithCandies(candies, extraCandies) {
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies.every((v) => v <= candies[i] + extraCandies));
  }

  return result;
}

//v <= candies[i] + extraCandies

// kidsWithCandies([2, 3, 5, 1, 3], 3);
// kidsWithCandies([4, 2, 1, 1, 2], 1);
kidsWithCandies([12, 1, 12], 10);
