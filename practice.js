/*
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always **unique**.

You may return the output in **any order**.
*/

const nums = [1, 2, 2, 3, 3, 3];
const x = 2;

function topKFrequent(arr, k) {
  const map = new Map();
  for (let item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((x) => x[0]);
}

console.log(topKFrequent(nums, x));
