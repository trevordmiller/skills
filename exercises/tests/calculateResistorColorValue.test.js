import test from "./test.js";
import calculateResistorColorValue from "../src/calculateResistorColorValue.js";

test({
  description: "calculateResistorColorValue baseline",
  actual: calculateResistorColorValue(["yellow", "violet"]),
  expected: 47,
});

test({
  description: "calculateResistorColorValue brown and black",
  actual: calculateResistorColorValue(["brown", "black"]),
  expected: 10,
});

test({
  description: "calculateResistorColorValue blue and gray",
  actual: calculateResistorColorValue(["blue", "gray"]),
  expected: 68,
});

test({
  description: "calculateResistorColorValue orange and orange",
  actual: calculateResistorColorValue(["orange", "orange"]),
  expected: 33,
});

test({
  description: "calculateResistorColorValue ignore surplus",
  actual: calculateResistorColorValue(["orange", "orange", "red", "blue"]),
  expected: 33,
});
