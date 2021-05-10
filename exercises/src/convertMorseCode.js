const convertMorseCode = (word) => {
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

  return word
    .split("")
    .map((letter) => letterCodes[alphabet.indexOf(letter)])
    .join("");
};

export default convertMorseCode;
