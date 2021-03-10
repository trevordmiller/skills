const diamond = (centerLetter) => {
  if (centerLetter === "") {
    return [""];
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const rowLetters = alphabet.slice(0, alphabet.indexOf(centerLetter) + 1)
    .split("");

  const topRows = rowLetters.map((letter, index) => {
    const spacesAround = " ".repeat(
      rowLetters.length - alphabet.indexOf(letter) - 1,
    );

    if (letter === "A") {
      return `${spacesAround}${letter}${spacesAround}`;
    }

    const spacesBetween = " ".repeat(1 + 2 * (index - 1));

    return `${spacesAround}${letter}${spacesBetween}${letter}${spacesAround}`;
  });

  const bottomRows = [...topRows].reverse().slice(1);

  const rows = topRows.concat(bottomRows);

  return rows;
};

export default diamond;
