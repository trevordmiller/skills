import test from "./test.js";
import nucleotide from "../src/nucleotide.js";

test({
  description: "nucleotide baseline",
  actual: nucleotide("GATTACA"),
  expected: ({
    adenine: 3,
    cytosine: 1,
    guanine: 1,
    thymine: 2,
  }),
});

test({
  description: "nucleotide empty",
  actual: nucleotide(""),
  expected: ({
    adenine: 0,
    cytosine: 0,
    guanine: 0,
    thymine: 0,
  }),
});

test({
  description: "nucleotide single",
  actual: nucleotide("G"),
  expected: ({
    adenine: 0,
    cytosine: 0,
    guanine: 1,
    thymine: 0,
  }),
});

test({
  description: "nucleotide large",
  actual: nucleotide("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"),
  expected: ({
    adenine: 20,
    cytosine: 12,
    guanine: 17,
    thymine: 21,
  }),
});
