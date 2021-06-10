const checkIsogram = (word) => {
  const characterCounts = word
    .toLowerCase()
    .split("")
    .reduce((result, character) => {
      if (character === "-") {
        return result;
      }

      const count = result[character] || 0;

      return ({
        ...result,
        [character]: count + 1,
      });
    }, {});

  const isIsogram = Object.keys(characterCounts)
    .every((character) => characterCounts[character] === 1);

  return isIsogram;
};

export default checkIsogram;
