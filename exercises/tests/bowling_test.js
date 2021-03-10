import test from "./test.js";
import bowling from "../src/bowling.js";

test({
  description: "bowling baseline",
  actual: bowling([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]),
  expected: 90,
});

test({
  description: "bowling no pins",
  actual: bowling([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 0,
});

test({
  description: "bowling spare",
  actual: bowling([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 16,
});

test({
  description: "bowling spare no bonus",
  actual: bowling([6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 10,
});

test({
  description: "bowling consecutive spares",
  actual: bowling([5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 31,
});

test({
  description: "bowling last frame spare",
  actual: bowling(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7],
  ),
  expected: 17,
});

test({
  description: "bowling strike",
  actual: bowling([10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 26,
});

test({
  description: "bowling strike no bonus",
  actual: bowling([10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 10,
});

test({
  description: "bowling consecutive strikes",
  actual: bowling([10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  expected: 81,
});

test({
  description: "bowling last frame strike",
  actual: bowling(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1],
  ),
  expected: 18,
});

test({
  description: "bowling all strikes",
  actual: bowling(
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  ),
  expected: 300,
});
