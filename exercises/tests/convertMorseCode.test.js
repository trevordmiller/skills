import test from "./test.js";
import convertMorseCode from "../src/convertMorseCode.js";

test({
  description: "convertMorseCode baseline",
  actual: convertMorseCode("three"),
  expected: "-.....-...",
});

test({
  description: "convertMorseCode short",
  actual: convertMorseCode("sos"),
  expected: "...---...",
});

test({
  description: "convertMorseCode long",
  actual: convertMorseCode("programmer"),
  expected: ".--..-.-----..-..-----..-.",
});
