/*
Given an integer array `nums`, return an array `output` where `output[i]` is the product of all the elements of `nums` except `nums[i]`.

Each product is **guaranteed** to fit in a **32-bit** integer.

Follow-up: Could you solve it in O(n)O(n) time without using the division operation?
*/

const nums = [1, 2, 4, 6];
const nums_2 = [-1, 0, 1, 2, 3];

function product_except_self(nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }
  console.log("left output ", output);

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}

console.log(product_except_self(nums));
console.log(product_except_self(nums_2));
