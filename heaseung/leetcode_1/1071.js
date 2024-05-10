function gcdOfStrings(str1, str2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdString = gcd(str1.length, str2.length);
  let result = str1.slice(0, gcdString);

  for (let i = 0; i < str1.length; i += gcdString) {
    if (!str1.substring(i, i + gcdString).includes(result)) return "";
  }

  for (let i = 0; i < str2.length; i += gcdString) {
    if (!str2.substring(i, i + gcdString).includes(result)) return "";
  }

  return result;
}

// gcdOfStrings("ABCDEF", "ABC");
gcdOfStrings("ABABAB", "ABAB");
// gcdOfStrings("LEET", "CODE");

//[...new Set(str)].join('')
