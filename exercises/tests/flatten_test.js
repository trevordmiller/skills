import test from "./test.js";
import flatten from "../src/flatten.js";

test({
  description: "flatten baseline",
  actual: flatten([1, [2, 3]]),
  expected: [1, 2, 3],
});

test({
  description: "flatten undefined",
  actual: flatten([1, 2, undefined]),
  expected: [1, 2],
});

test({
  description: "flatten null",
  actual: flatten([1, 2, null]),
  expected: [1, 2],
});

test({
  description: "flatten no values",
  actual: flatten(
    [null, [[[undefined]]], null, undefined, [[null, null], null], null],
  ),
  expected: [],
});

test({
  description: "flatten empty",
  actual: flatten([]),
  expected: [],
});

test({
  description: "flatten empty nested",
  actual: flatten([[]]),
  expected: [],
});

test({
  description: "flatten 2 level",
  actual: flatten([1, [2, 3, 4], 5]),
  expected: [1, 2, 3, 4, 5],
});

test({
  description: "flatten 3 level",
  actual: flatten([1, [2, 3, 4], 5, [6, [7, 8]]]),
  expected: [1, 2, 3, 4, 5, 6, 7, 8],
});

test({
  description: "flatten 5 level",
  actual: flatten([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2]),
  expected: [0, 2, 2, 3, 8, 100, 4, 50, -2],
});

test({
  description: "flatten 6 level",
  actual: flatten([0, 2, [[2, 3], 8, [[100]], null, [[undefined]]], -2]),
  expected: [0, 2, 2, 3, 8, 100, -2],
});
