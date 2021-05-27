import test from "./test.js";
import calculateScrabbleWordScore from "../src/calculateScrabbleWordScore.js";

test({
  description: "calculateScrabbleWordScore baseline",
  actual: calculateScrabbleWordScore("cabbage"),
  expected: 14,
});

test({
  description: "calculateScrabbleWordScore empty",
  actual: calculateScrabbleWordScore(""),
  expected: 0,
});

test({
  description: "calculateScrabbleWordScore single letter word",
  actual: calculateScrabbleWordScore("a"),
  expected: 1,
});

test({
  description: "calculateScrabbleWordScore short word",
  actual: calculateScrabbleWordScore("zoo"),
  expected: 12,
});

test({
  description: "calculateScrabbleWordScore medium word",
  actual: calculateScrabbleWordScore("quirky"),
  expected: 22,
});

test({
  description: "calculateScrabbleWordScore long word",
  actual: calculateScrabbleWordScore("oxyphenbutazone"),
  expected: 41,
});
