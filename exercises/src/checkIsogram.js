const checkIsogram = (word) => {
  const characters = word
    .toLowerCase()
    .split("")
    .filter((character) => character !== "-");

  const uniqueCharacters = [...new Set(characters)];

  const isIsogram = characters.length === uniqueCharacters.length;

  return isIsogram;
};

export default checkIsogram;
