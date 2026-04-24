/*
Design an algorithm to encode **a list of strings** to **a string**. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

Machine 2 (receiver) has the function:
*/

const strs = ["Hello", "World"];

class Codec {
  encode(strs) {
    let result = "";
    for (let item of strs) {
      result += item.length + "#" + item;
    }
    return result;
  }
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      const length = parseInt(str.substring(i, j));
      const s = str.substring(j + 1, j + 1 + length);
      result.push(s);
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

/*
NOTES 
- JOIN STRINGS WITH for LOOP & += 
- TWO POINTERS 
--- CREATE AN EMPTY ARRAY 
--- CREATE FIRST POINTER (USUALLY 0 OR FIRST ELEMENT)
--- LOOP & CREATE SECOND POINTER, AT FIRST, EQUAL TO FIRST POINTER 
--- CREATE CONDITION AND INCREMENT SECOND POINTER 
--- FIND THINGS YOU NEED THEN MOVE THE FIRST POINTER 
--- PUSH TO ARRAY AND RETURN 
*/
