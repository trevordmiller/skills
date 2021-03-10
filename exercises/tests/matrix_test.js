import test from "./test.js";
import matrix from "../src/matrix.js";

test({
  description: "matrix baseline",
  actual: matrix("1 2\n3 4"),
  expected: {
    rows: [[1, 2], [3, 4]],
    columns: [[1, 3], [2, 4]],
  },
});

test({
  description: "matrix extract row",
  actual: matrix("1 2\n3 4").rows[1],
  expected: [3, 4],
});

test({
  description: "matrix extract row from one number matrix",
  actual: matrix("1").rows[0],
  expected: [1],
});

test({
  description: "matrix extract row where numbers have different widths",
  actual: matrix("1 2\n10 20").rows[1],
  expected: [10, 20],
});

test({
  description:
    "matrix extract row from non-square matrix with no corresponding column",
  actual: matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").rows[3],
  expected: [8, 7, 6],
});

test({
  description: "matrix extract column from one number matrix",
  actual: matrix("1").columns[0],
  expected: [1],
});

test({
  description: "matrix extract column",
  actual: matrix("1 2 3\n4 5 6\n7 8 9").columns[2],
  expected: [3, 6, 9],
});

test({
  description:
    "matrix extract column from non-square matrix with no corresponding row",
  actual: matrix("1 2 3 4\n5 6 7 8\n9 8 7 6").columns[3],
  expected: [4, 8, 6],
});

test({
  description:
    "matrix extract column from non-square matrix with more columns than rows",
  actual: matrix("1 2 3\n4 5 6").columns[2],
  expected: [3, 6],
});

test({
  description: "matrix extract column where numbers have different widths",
  actual: matrix("89 1903 3\n18 3 1\n9 4 800").columns[1],
  expected: [1903, 3, 4],
});
