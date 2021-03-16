import test from "./test.js";
import necklace from "../src/necklace.js";

test({
  description: "necklace baseline",
  actual: necklace({
    original: "nicole",
    possibleVariation: "lenico",
  }),
  expected: true,
});

test({
  description: "necklace basic no",
  actual: necklace({
    original: "nicole",
    possibleVariation: "coneli",
  }),
  expected: false,
});

test({
  description: "necklace long",
  actual: necklace({
    original: "aabaaaaabaab",
    possibleVariation: "aabaabaabaaa",
  }),
  expected: true,
});

test({
  description: "necklace single character",
  actual: necklace({
    original: "a",
    possibleVariation: "a",
  }),
  expected: true,
});

test({
  description: "necklace missing",
  actual: necklace({
    original: "a",
    possibleVariation: "",
  }),
  expected: false,
});

test({
  description: "necklace incomparable",
  actual: necklace({
    original: "abc",
    possibleVariation: "abcd",
  }),
  expected: false,
});

test({
  description: "necklace empty",
  actual: necklace({
    original: "",
    possibleVariation: "",
  }),
  expected: true,
});
