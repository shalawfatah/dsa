function practice(arr) {
  const seen = {};
  for (let item of arr) {
    seen[item] = true;
  }
  return seen;
}

console.log(practice([1, 22, "hi"]));
