function moveZeroes(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) nums.push(nums.splice(i, 1)[0]);
  }
  return nums;
}

moveZeroes([0, 1, 0, 3, 12]);
