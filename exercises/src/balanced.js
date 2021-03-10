const balanced = (letters) => {
  if (!letters) {
    return true;
  }

  const characters = letters.split("");
  const xCount = characters.filter((character) => character === "x").length;
  const yCount = characters.filter((character) => character === "y").length;

  return xCount === yCount;
};

export default balanced;
