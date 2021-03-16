import test from "./test.js";
import anagram from "../src/anagram.js";

test({
  description: "anagram baseline",
  actual: anagram({
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
  description: "anagram none",
  actual: anagram({
    word: "good",
    possibleAnagrams: ["dog", "goody"],
  }),
  expected: [],
});

test({
  description: "anagram casings",
  actual: anagram({
    word: "nose",
    possibleAnagrams: ["Eons", "ONES"],
  }),
  expected: ["Eons", "ONES"],
});
