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
- LEARN HOW TO TURN STRINGS/ARRAY INTO KEY-VALUE PAIRS, KEY ELEMENT, VALUE INCREMENTAL NUMBER
*/

function proper_anagram(x, y) {
  if (x.length !== y.length) return false;
  const obj = {};
  for (let item of x) {
    obj[item] = (obj[item] || 0) + 1;
  }
  for (let item of y) {
    if (!obj[item]) return false;
    obj[item]--;
  }
  return true;
}
