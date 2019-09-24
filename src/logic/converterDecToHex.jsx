import { decToHex } from "hex2dec";

export default function convertToHexLittleEndian(stringToConvert) {
  let hex = decToHex(stringToConvert, { prefix: false });
  let hexArray = hex.split("");

  while (hexArray.length < 16) {
    hexArray.unshift("0");
  }

  let arranged = [];
  for (let i = 0; i < 16; i = i + 2) {
    let pair = hexArray[i].concat(hexArray[i + 1]);
    arranged.unshift(pair);
  }
  let answer = arranged.join("");
  return answer;
}
