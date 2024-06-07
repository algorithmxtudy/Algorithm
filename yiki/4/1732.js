var largestAltitude = function(gain) {
  let altitude = 0; // 현재 고도를 나타내는 변수 초기화
  let maxAltitude = 0; // 최고 고도를 나타내는 변수 초기화
  
  for (let i = 0; i < gain.length; i++) {
      // 현재 고도에 순수 고도 변화를 더함
      altitude += gain[i];
      
      // 최고 고도를 업데이트
      maxAltitude = Math.max(maxAltitude, altitude);
  }
  
  return maxAltitude;
};
