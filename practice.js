function has_duplicate(arr) {
  return arr.length !== new Set(arr).size;
}
