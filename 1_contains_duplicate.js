/*
 *Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 */

// SOLUTION #1 - Set
function contains_duplicate(arr) {
  return arr.length !== new Set(arr).size;
}

contains_duplicate([1, 2, 3, 4, 4]);
contains_duplicate([1, 2, 3, , 4]);

// SOLUTION #2 - ARRAY ELEMENT TO OBJECT KEYS
function has_duplicate(arr) {
  const seen = {};
  for (let item of arr) {
    if (seen[item]) return true;
    seen[item] = true;
  }
  return false;
}

has_duplicate([1, 2, 3, 4, 4]);
has_duplicate([1, 2, 3, 4]);

/*
 * LEARN THESE THINGS
 * CONVERT ARRAY TO SET AND CHECK LENGTH, SIZE
 * LOOP THROUGH ARRAY & SET ARRAY ITEMS TO BE OBJECT KEYS, CHECK IF KEY ALREADY THERE
 */
