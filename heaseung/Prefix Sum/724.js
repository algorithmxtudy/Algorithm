function pivotIndex(nums) {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum * 2 === sum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
}

// 공식 leftSum === rigthSum - leftSum - nums[i]
pivotIndex([1, 7, 3, 6, 5, 6]);
