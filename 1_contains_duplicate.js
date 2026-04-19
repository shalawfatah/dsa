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
function has_duplicate(arr) {
  const seen = {};
  for (let item of arr) {
    if (seen[item]) return true;
    seen[item] = true;
  }
  return false;
}

console.log("solution 2", has_duplicate([1, 2, 3, 4, 4]));
console.log("solution 2", has_duplicate([1, 2, 3, 4]));

// WE CREATE A HASHMAP AND SET EVERY ARRAY ELEMENT AS KEY AND VALUE AS TRUE
// IF KEY IS ALREDAY THERE, THEN WE RETURN TRUE, ELSE WE REGISTER OBJECT
// FINALLY, WE RETURN FALSE
