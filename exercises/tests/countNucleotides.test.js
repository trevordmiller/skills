import test from "./test.js";
import countNucleotides from "../src/countNucleotides.js";

test({
  description: "countNucleotides basic",
  actual: countNucleotides("GATTACA"),
  expected: ({
    adenine: 3,
    cytosine: 1,
    guanine: 1,
    thymine: 2,
  }),
});

test({
  description: "countNucleotides empty",
  actual: countNucleotides(""),
  expected: ({
    adenine: 0,
    cytosine: 0,
    guanine: 0,
    thymine: 0,
  }),
});

test({
  description: "countNucleotides single",
  actual: countNucleotides("G"),
  expected: ({
    adenine: 0,
    cytosine: 0,
    guanine: 1,
    thymine: 0,
  }),
});

test({
  description: "countNucleotides large",
  actual: countNucleotides(
    "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC",
  ),
  expected: ({
    adenine: 20,
    cytosine: 12,
    guanine: 17,
    thymine: 21,
  }),
});
