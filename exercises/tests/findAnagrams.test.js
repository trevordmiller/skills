import test from "./test.js";
import findAnagrams from "../src/findAnagrams.js";

test({
  description: "findAnagrams basic",
  actual: findAnagrams({
    word: "allergy",
    possibleAnagrams: [
      "gallery",
      "ballerina",
      "regally",
      "clergy",
      "largely",
      "leading",
    ],
  }),
  expected: ["gallery", "regally", "largely"],
});

test({
  description: "findAnagrams none",
  actual: findAnagrams({
    word: "good",
    possibleAnagrams: ["dog", "goody"],
  }),
  expected: [],
});

test({
  description: "findAnagrams casings",
  actual: findAnagrams({
    word: "nose",
    possibleAnagrams: ["Eons", "ONES"],
  }),
  expected: ["Eons", "ONES"],
});
