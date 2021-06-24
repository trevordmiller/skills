const complements = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

const convertRnaComplementTranscription = (dna) => {
  const conversion = dna
    .split("")
    .map((nucleotide) => complements[nucleotide])
    .join("");

  return conversion;
};

export default convertRnaComplementTranscription;
