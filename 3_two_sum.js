/*
Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that *every* input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.
*/

const nums = [8, 9, 10, 5, 3, 4];
const target = 7;

function two_sum(arr, tar) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const completion = tar - arr[i];
    if (map.has(completion)) {
      return [map.get(completion), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
console.log(two_sum(nums, 7));

/*
THIS IS ONE SIMPLE TRICK, TAKE ONE ITEM, LOOP THROUGH ARRAY, FIND IF TARGET MINUS ITEM EXISTS
IF IT DOES, TAKE THEIR INDEX, Map IS EASY TO DO THAT 
*/
