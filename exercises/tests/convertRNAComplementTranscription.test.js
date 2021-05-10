import test from "./test.js";
import convertRNAComplementTranscription from "../src/convertRNAComplementTranscription.js";

test({
  description: "convertRNAComplementTranscription baseline",
  actual: convertRNAComplementTranscription("TGC"),
  expected: "ACG",
});

test({
  description: "convertRNAComplementTranscription cytosine to guanine",
  actual: convertRNAComplementTranscription("C"),
  expected: "G",
});

test({
  description: "convertRNAComplementTranscription guanine to cytosine",
  actual: convertRNAComplementTranscription("G"),
  expected: "C",
});

test({
  description: "convertRNAComplementTranscription thymine to adenine",
  actual: convertRNAComplementTranscription("T"),
  expected: "A",
});

test({
  description: "convertRNAComplementTranscription adenine to uracil",
  actual: convertRNAComplementTranscription("A"),
  expected: "U",
});

test({
  description: "convertRNAComplementTranscription combined",
  actual: convertRNAComplementTranscription("ACGTGGTCTTAA"),
  expected: "UGCACCAGAAUU",
});

test({
  description: "convertRNAComplementTranscription empty",
  actual: convertRNAComplementTranscription(""),
  expected: "",
});
