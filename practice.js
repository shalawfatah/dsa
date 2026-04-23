/*
Given an array of strings `strs`, group all *anagrams* together into sublists. You may return the output in **any order**.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];

function group_anagrams(arr) {
  const map = new Map();
  for (let item of arr) {
    const sorted_str = item.split("").sort().join("");
    if (!map.has(sorted_str)) {
      map.set(sorted_str, []);
    }
    map.get(sorted_str).push(item);
  }
  return Array.from(map.values());
}

console.log(group_anagrams(strs));
