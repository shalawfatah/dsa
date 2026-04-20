// VALID ANAGRAM
/*
Given two strings `s` and `t`, return `true` if the two strings are anagrams of each other, otherwise return `false`.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

const s = "racecar";
const t = "carrace";
const a = "racecarr";
const b = "carrace";
const c = "raceaar";
const d = "carrace";

function valid_anagram(x, y) {
  if (x.length === y.length) {
    const new_x = x.toLowerCase();
    const new_y = y.toLowerCase();
    return [...new_x].sort().join("") === [...new_y].sort().join("");
  }
  return false;
}

console.log(valid_anagram(s, t));
console.log(valid_anagram(a, b));
console.log(valid_anagram(c, d));

/*
- LEARN HOW TO CONVERT STRING TO ARRAY
- LEARN HOW TO CONVERT ARRAY TO STRING
- SORTING COULD HAVE EDGE CASES LIKE CAPITAL LETTERS
*/
