var isSubsequence = function(s, t) {
  let sIndex = 0; // s의 인덱스
  let tIndex = 0; // t의 인덱스
  
  // s와 t를 비교하면서 s의 모든 문자가 t에 있는지 확인
  while (sIndex < s.length && tIndex < t.length) {
      if (s[sIndex] === t[tIndex]) {
          sIndex++;
      }
      tIndex++;
  }
  
  // s의 모든 문자가 t에 있는 경우 true 반환
  return sIndex === s.length;
};
