var gcdOfStrings = function(str1, str2) {
  const gcd = (a, b) => {
      while (b !== 0) {
          const temp = b;
          b = a % b;
          a = temp;
      }
      return a;
  };
  
  const length = gcd(str1.length, str2.length);
  const substring = str1.substring(0, length);
  
  if (substring.repeat(str1.length / length) === str1 && substring.repeat(str2.length / length) === str2) {
      return substring;
  } else {
      return '';
  }
};

// Test cases
console.log(gcdOfStrings("ABCABC", "ABC"));   // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB"));   // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE"));   // Output: ""
