import test from "./test.js";
import calculateMaximumYahtzeeScore from "../src/calculateMaximumYahtzeeScore.js";

test({
  description: "calculateMaximumYahtzeeScore basic",
  actual: calculateMaximumYahtzeeScore([2, 3, 5, 5, 6]),
  expected: 10,
});

test({
  description: "calculateMaximumYahtzeeScore all same",
  actual: calculateMaximumYahtzeeScore([6, 6, 6, 6, 6]),
  expected: 30,
});

test({
  description: "calculateMaximumYahtzeeScore all different",
  actual: calculateMaximumYahtzeeScore([1, 2, 3, 4, 5]),
  expected: 5,
});
