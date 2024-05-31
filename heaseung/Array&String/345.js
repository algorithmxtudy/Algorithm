function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = [];
  let answer = "";
  let a = 0;

  s.split("").filter((v) => (vowels.includes(v) ? result.push(v) : false));
  result.reverse();

  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      answer += s[i];
    } else {
      answer += result[a];
      a++;
    }
  }

  return answer;
}

// reverseVowels("hello");
reverseVowels("aA");
