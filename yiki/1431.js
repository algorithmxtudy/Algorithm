var kidsWithCandies = function(candies, extraCandies) {
  // Find the maximum number of candies among all the kids
  const maxCandies = Math.max(...candies);
  
  // Initialize the result array
  const result = [];
  
  // Iterate through each kid's candies
  for (let i = 0; i < candies.length; i++) {
      // Check if adding extra candies makes their total candies greater than or equal to the maximum
      result.push(candies[i] + extraCandies >= maxCandies);
  }
  
  return result;
};

// Test cases
console.log(kidsWithCandies([2,3,5,1,3], 3));   // Output: [true,true,true,false,true] 
console.log(kidsWithCandies([4,2,1,1,2], 1));   // Output: [true,false,false,false,false] 
console.log(kidsWithCandies([12,1,12], 10));   // Output: [true,false,true]
