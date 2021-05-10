import test from "./test.js";
import checkSameNecklace from "../src/checkSameNecklace.js";

test({
  description: "checkSameNecklace baseline",
  actual: checkSameNecklace({
    original: "nicole",
    possibleVariation: "lenico",
  }),
  expected: true,
});

test({
  description: "checkSameNecklace basic no",
  actual: checkSameNecklace({
    original: "nicole",
    possibleVariation: "coneli",
  }),
  expected: false,
});

test({
  description: "checkSameNecklace long",
  actual: checkSameNecklace({
    original: "aabaaaaabaab",
    possibleVariation: "aabaabaabaaa",
  }),
  expected: true,
});

test({
  description: "checkSameNecklace single character",
  actual: checkSameNecklace({
    original: "a",
    possibleVariation: "a",
  }),
  expected: true,
});

test({
  description: "checkSameNecklace missing",
  actual: checkSameNecklace({
    original: "a",
    possibleVariation: "",
  }),
  expected: false,
});

test({
  description: "checkSameNecklace incomparable",
  actual: checkSameNecklace({
    original: "abc",
    possibleVariation: "abcd",
  }),
  expected: false,
});

test({
  description: "checkSameNecklace empty",
  actual: checkSameNecklace({
    original: "",
    possibleVariation: "",
  }),
  expected: true,
});
