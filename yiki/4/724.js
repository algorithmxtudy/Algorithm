var pivotIndex = function(nums) {
  const n = nums.length;
  
  // 왼쪽과 오른쪽의 누적합을 저장할 배열을 초기화합니다.
  const leftSums = new Array(n).fill(0);
  const rightSums = new Array(n).fill(0);
  
  // 왼쪽부터 오른쪽까지의 누적합을 계산합니다.
  for (let i = 1; i < n; i++) {
      leftSums[i] = leftSums[i - 1] + nums[i - 1];
  }
  
  // 오른쪽부터 왼쪽까지의 누적합을 계산합니다.
  for (let i = n - 2; i >= 0; i--) {
      rightSums[i] = rightSums[i + 1] + nums[i + 1];
  }
  
  // 왼쪽과 오른쪽의 누적합이 같은지 확인하며 pivot index를 찾습니다.
  for (let i = 0; i < n; i++) {
      if (leftSums[i] === rightSums[i]) {
          return i;
      }
  }
  
  // pivot index가 없는 경우 -1을 반환합니다.
  return -1;
};
