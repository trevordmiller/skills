import test from "./test.js";
import checkLeapYear from "../src/checkLeapYear.js";

test({
  description: "checkLeapYear basic",
  actual: checkLeapYear("1976"),
  expected: true,
});

test({
  description: "checkLeapYear not divisible by 4",
  actual: checkLeapYear("2015"),
  expected: false,
});

test({
  description: "checkLeapYear divisible by 4 but not 100",
  actual: checkLeapYear("1996"),
  expected: true,
});

test({
  description: "checkLeapYear divisible by 100 but not 400",
  actual: checkLeapYear("2100"),
  expected: false,
});

test({
  description: "checkLeapYear divisible by 400",
  actual: checkLeapYear("2000"),
  expected: true,
});
