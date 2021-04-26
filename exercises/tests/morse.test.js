import test from "./test.js";
import morse from "../src/morse.js";

test({
  description: "morse baseline",
  actual: morse("three"),
  expected: "-.....-...",
});

test({
  description: "morse short",
  actual: morse("sos"),
  expected: "...---...",
});

test({
  description: "morse long",
  actual: morse("programmer"),
  expected: ".--..-.-----..-..-----..-.",
});
