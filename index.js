// 1. TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

// First solution (Bruteforce)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([3, 4, 5, 2, 1], 8));
