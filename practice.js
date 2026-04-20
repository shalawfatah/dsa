const str_1 = "anagram";
const str_2 = "gramana";

function is_valid_anagram(x, y) {
  const obj = {};
  for (let item of x) {
    obj[item] = (obj[item] || 0) + 1;
  }
  // HERE obj = {a = 3, n = 1, g = 1, r = 1, m = 1}
  for (let item of y) {
    if (!obj[item]) return false;
    // IF THERE IS NO g,r,a,m,n THEN NO ANAGRAM
    obj[item]--;
    // IF THERE IS g,r,a,m,n, DECREMENT VALUE
  }
  return true;
}
console.log(is_valid_anagram(str_1, str_2));
