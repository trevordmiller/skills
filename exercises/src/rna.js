const rna = (dna) => {
  const complements = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  const conversion = dna
    .split("")
    .map((nucleotide) => complements[nucleotide])
    .join("");

  return conversion;
};

export default rna;
