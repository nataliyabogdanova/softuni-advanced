function extractIncreasingSubsequenceFromArray(nums) {
    let result = [];
    let curBiggest = nums.shift();
    result.push(curBiggest);

    nums.forEach(num => {
        if (curBiggest <= num) {
            curBiggest = num;
            result.push(curBiggest);
        }
    });
    return result;
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]))