import test from "./test.js";
import resistor from "../src/resistor.js";

test({
  description: "resistor baseline",
  actual: resistor(["yellow", "violet"]),
  expected: 47,
});

test({
  description: "resistor brown and black",
  actual: resistor(["brown", "black"]),
  expected: 10,
});

test({
  description: "resistor blue and gray",
  actual: resistor(["blue", "gray"]),
  expected: 68,
});

test({
  description: "resistor orange and orange",
  actual: resistor(["orange", "orange"]),
  expected: 33,
});

test({
  description: "resistor ignore surplus",
  actual: resistor(["orange", "orange", "red", "blue"]),
  expected: 33,
});
