var reverseWords = function(s) {
  s = s.trim();
  const words = s.split(/\s+/);
  const reversedWords = words.reverse();
  return reversedWords.join(' ');
};

console.log(reverseWords("the sky is blue"));       // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));       // Output: "world hello"
console.log(reverseWords("a good   example"));      // Output: "example good a"
