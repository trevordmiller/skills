import test from "./test.js";
import flattenLists from "../src/flattenLists.js";

test({
  description: "flattenLists basic",
  actual: flattenLists([1, [2, 3]]),
  expected: [1, 2, 3],
});

test({
  description: "flattenLists undefined",
  actual: flattenLists([1, 2, undefined]),
  expected: [1, 2],
});

test({
  description: "flattenLists null",
  actual: flattenLists([1, 2, null]),
  expected: [1, 2],
});

test({
  description: "flattenLists no values",
  actual: flattenLists(
    [null, [[[undefined]]], null, undefined, [[null, null], null], null],
  ),
  expected: [],
});

test({
  description: "flattenLists empty",
  actual: flattenLists([]),
  expected: [],
});

test({
  description: "flattenLists empty nested",
  actual: flattenLists([[]]),
  expected: [],
});

test({
  description: "flattenLists 2 level",
  actual: flattenLists([1, [2, 3, 4], 5]),
  expected: [1, 2, 3, 4, 5],
});

test({
  description: "flattenLists 3 level",
  actual: flattenLists([1, [2, 3, 4], 5, [6, [7, 8]]]),
  expected: [1, 2, 3, 4, 5, 6, 7, 8],
});

test({
  description: "flattenLists 5 level",
  actual: flattenLists([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2]),
  expected: [0, 2, 2, 3, 8, 100, 4, 50, -2],
});

test({
  description: "flattenLists 6 level",
  actual: flattenLists([0, 2, [[2, 3], 8, [[100]], null, [[undefined]]], -2]),
  expected: [0, 2, 2, 3, 8, 100, -2],
});
