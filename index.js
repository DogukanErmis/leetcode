// 1. TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // Bruteforce
  // Time complexity: O(n^^2)
  // Space complexity: O(1)
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) return [i, j];
  //   }
  // }

  // Hash Map
  // Time complexity: O(n)
  // Space complexity: O(n)
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
  }
  return null;
};

console.log(twoSum([3, 4, 5, 2, 1], 9));
