const concealMessage = ({ message, key }) => {
  const alphabetStartCharCode = 65;
  const alphabetEndCharCode = 90;

  const messageLetters = message.toUpperCase().split("");
  const keyLetters = key.toUpperCase().split("");

  return messageLetters
    .map((_, index) => {
      const shiftAmount = keyLetters[index].charCodeAt() -
        alphabetStartCharCode;
      const charCode = messageLetters[index].charCodeAt();
      const shiftedCharCode = charCode + shiftAmount > alphabetEndCharCode
        ? charCode + shiftAmount - alphabetEndCharCode + alphabetStartCharCode -
          1
        : charCode + shiftAmount;
      const shiftedLetter = String.fromCharCode(shiftedCharCode);
      return shiftedLetter;
    })
    .join("")
    .toLowerCase();
};

export default concealMessage;
