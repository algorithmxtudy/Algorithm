var moveZeroes = function(nums) {
    let nonZeroIndex = 0; // 0이 아닌 숫자들을 저장할 인덱스
    
    // 배열을 순회하면서 0이 아닌 숫자들을 찾아서 맨 앞으로 이동시킴
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    
    // 나머지 끝 부분을 0으로 채움
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
