/*
Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that *every* input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.
*/

function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const completion = target - arr[i];
    if (map.has(completion)) {
      return [map.get(completion), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
const nums = [3, 4, 5, 6];
const target = 7;

console.log(twoSum(nums, target));
