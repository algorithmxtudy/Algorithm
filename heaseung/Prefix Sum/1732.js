function largestAltitude(gain) {
  let start = 0;
  let result = [0];

  gain.map((v) => result.push((start += v)));

  return Math.max(...result);
}

largestAltitude([-5, 1, 5, 0, -7]);
// largestAltitude([-4, -3, -2, -1, 4, 3, 2]);
