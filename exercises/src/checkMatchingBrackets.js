const checkMatchingBrackets = (text) => {
  if (text === "") {
    return true;
  }

  let bracketsToCheck = text.match(/[\x5b\x5d\x29\x28\x7b\x7d]/gi).join("");

  while (/(\[]|\{\}|\(\))/gi.test(bracketsToCheck)) {
    bracketsToCheck = bracketsToCheck.replace(/(\[]|\{\}|\(\))/gi, "");
  }

  const isMatching = bracketsToCheck.length === 0;

  return isMatching;
};

export default checkMatchingBrackets;
