import test from "./test.js";
import convertRnaComplementTranscription from "../src/convertRnaComplementTranscription.js";

test({
  description: "convertRnaComplementTranscription basic",
  actual: convertRnaComplementTranscription("TGC"),
  expected: "ACG",
});

test({
  description: "convertRnaComplementTranscription cytosine to guanine",
  actual: convertRnaComplementTranscription("C"),
  expected: "G",
});

test({
  description: "convertRnaComplementTranscription guanine to cytosine",
  actual: convertRnaComplementTranscription("G"),
  expected: "C",
});

test({
  description: "convertRnaComplementTranscription thymine to adenine",
  actual: convertRnaComplementTranscription("T"),
  expected: "A",
});

test({
  description: "convertRnaComplementTranscription adenine to uracil",
  actual: convertRnaComplementTranscription("A"),
  expected: "U",
});

test({
  description: "convertRnaComplementTranscription combined",
  actual: convertRnaComplementTranscription("ACGTGGTCTTAA"),
  expected: "UGCACCAGAAUU",
});

test({
  description: "convertRnaComplementTranscription empty",
  actual: convertRnaComplementTranscription(""),
  expected: "",
});
