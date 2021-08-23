const alphabet = "abcdefghijklmnopqrstuvwxyz";

const letterCodes = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

const convertMorseCode = (word) =>
  word
    .split("")
    .map((letter) => letterCodes[alphabet.indexOf(letter)])
    .join("");

export default convertMorseCode;
