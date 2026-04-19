/*
 *Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 */

// SOLUTION #1 Set
function contains_duplicate(arr) {
  return arr.length !== new Set(arr).size;
}

console.log("solution 1", contains_duplicate([1, 2, 3, 4, 4]));
console.log("solution 1", contains_duplicate([1, 2, 3, , 4]));

// WE CAN CHECK FOR DUPLICATES BY ARRAY LENGTH IF THERE IS REPEATED ITEMS OR NOT
// Set HELPS BECAUSE IT DOES NOT TAKE DUPLICATE

// SOLUTION #2
