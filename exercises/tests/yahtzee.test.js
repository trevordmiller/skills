import test from "./test.js";
import yahtzee from "../src/yahtzee.js";

test({
  description: "yahtzee baseline",
  actual: yahtzee([2, 3, 5, 5, 6]),
  expected: 10,
});

test({
  description: "yahtzee all same",
  actual: yahtzee([6, 6, 6, 6, 6]),
  expected: 30,
});

test({
  description: "yahtzee all different",
  actual: yahtzee([1, 2, 3, 4, 5]),
  expected: 5,
});
