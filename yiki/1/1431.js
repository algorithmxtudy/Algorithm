var kidsWithCandies = function(candies, extraCandies) {
  
  const maxCandies = Math.max(...candies);
  
  const result = [];
  
  for (let i = 0; i < candies.length; i++) {
      result.push(candies[i] + extraCandies >= maxCandies);
  }
  
  return result;
};

// Test cases
console.log(kidsWithCandies([2,3,5,1,3], 3));   // Output: [true,true,true,false,true] 
console.log(kidsWithCandies([4,2,1,1,2], 1));   // Output: [true,false,false,false,false] 
console.log(kidsWithCandies([12,1,12], 10));   // Output: [true,false,true]
