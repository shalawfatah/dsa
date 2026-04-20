const str_1 = "anagram";
const str_2 = "gramana";

function is_valid_anagram(x, y) {
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
console.log(is_valid_anagram(str_1, str_2));
