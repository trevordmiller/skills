import test from "./test.js";
import calculateTriangleType from "../src/calculateTriangleType.js";

test({
  description: "calculateTriangleType basic",
  actual: calculateTriangleType("42 42 5"),
  expected: "isosceles",
});

test({
  description: "calculateTriangleType equilateral",
  actual: calculateTriangleType("1.3 1.3 1.3"),
  expected: "equilateral",
});

test({
  description: "calculateTriangleType isosceles",
  actual: calculateTriangleType("5.3 7 5.3"),
  expected: "isosceles",
});

test({
  description: "calculateTriangleType scalene",
  actual: calculateTriangleType("3 13 9.5"),
  expected: "scalene",
});
