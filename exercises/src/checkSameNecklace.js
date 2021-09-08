const checkSameNecklace = ({ original, possibleVariation }) => {
  if (original === "") {
    return true;
  }

  if (original.length !== possibleVariation.length) {
    return false;
  }

  const characters = original.split("");

  const possibleVariations = characters.map((_, index) => {
    const head = original.slice(0, index);
    const tail = original.slice(index);

    return `${tail}${head}`;
  });

  return possibleVariations.includes(possibleVariation);
};

export default checkSameNecklace;
