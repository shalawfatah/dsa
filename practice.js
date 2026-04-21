/*
Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that *every* input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.
*/

function twoSum(arr, tar) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const completion = tar - arr[i];
    if (map.has(completion)) {
      return [arr[completion], i];
    }
    map.set(arr[i], i);
    console.log("item, index ", arr[i], i);
  }
  return [];
}

console.log(twoSum([1, 3, 5, 4], 7));
