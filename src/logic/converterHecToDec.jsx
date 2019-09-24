import { hexToDec } from "hex2dec";

export default function convertToDecLittleEndian(stringToConvert) {
  let arrayHex = stringToConvert.split("");
  let arranged = [];
  for (let i = 0; i < 16; i = i + 2) {
    let pair = arrayHex[i].concat(arrayHex[i + 1]);
    arranged.unshift(pair);
  }
  let joined = arranged.join("");
  let dec = hexToDec(joined, { prefix: false });
  return dec;
}
