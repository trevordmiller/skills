import test from "./test.js";
import rna from "../src/rna.js";

test({
  description: "rna baseline",
  actual: rna("TGC"),
  expected: "ACG",
});

test({
  description: "rna cytosine to guanine",
  actual: rna("C"),
  expected: "G",
});

test({
  description: "rna guanine to cytosine",
  actual: rna("G"),
  expected: "C",
});

test({
  description: "rna thymine to adenine",
  actual: rna("T"),
  expected: "A",
});

test({
  description: "rna adenine to uracil",
  actual: rna("A"),
  expected: "U",
});

test({
  description: "rna combined",
  actual: rna("ACGTGGTCTTAA"),
  expected: "UGCACCAGAAUU",
});

test({
  description: "rna empty",
  actual: rna(""),
  expected: "",
});
