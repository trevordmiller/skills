const nucleotide = (strand) => {
  const nucleotidesByLetter = {
    A: "adenine",
    C: "cytosine",
    G: "guanine",
    T: "thymine",
  };

  const initialResult = {
    adenine: 0,
    cytosine: 0,
    guanine: 0,
    thymine: 0,
  };

  const result = strand
    .split("")
    .reduce((result, letter) => {
      const label = nucleotidesByLetter[letter];

      return ({
        ...result,
        [label]: result[label] + 1,
      })
    }, initialResult);

  return result;
}

export default nucleotide;
