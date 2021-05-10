const checkPangram = (sentence) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const cleanSentence = sentence
    .replace(/[^A-Za-z]/g, "")
    .toUpperCase();

  const isPangram = alphabet
    .split("")
    .every((letter) => cleanSentence.includes(letter));

  return isPangram;
};

export default checkPangram;
