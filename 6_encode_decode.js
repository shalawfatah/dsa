/*
Design an algorithm to encode **a list of strings** to **a string**. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

Machine 2 (receiver) has the function:
*/

const strs = ["Hello", "World"];

class Codec {
  encode(strs) {
    let result = "";
    for (let str of strs) {
      result += str.length + "#" + str;
    }
    return result;
  }
  decode(s) {
    const result = [];
    let i = 0;
    while (i < s.length) {
      let j = i;
      while (s[j] !== "#") {
        j++;
      }
      const length = parseInt(s.substring(i, j));
      const str = s.substring(j + 1, j + 1 + length);
      result.push(str);
      i = j + 1 + length;
    }
    return result;
  }
}

const codec = new Codec();
const encoded = codec.encode(strs);
const decoded = codec.decode(encoded);
console.log("encoded ", encoded);
console.log("decoded ", decoded);
