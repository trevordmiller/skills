import test from "./test.js";
import checkIsogram from "../src/checkIsogram.js";

test({
  description: "checkIsogram basic",
  actual: checkIsogram("lumberjacks"),
  expected: true,
});

test({
  description: "checkIsogram duplicated characters",
  actual: checkIsogram("eleven"),
  expected: false,
});

test({
  description: "checkIsogram unique characters",
  actual: checkIsogram("subdermatoglyphic"),
  expected: true,
});

test({
  description: "checkIsogram empty",
  actual: checkIsogram(""),
  expected: true,
});

test({
  description: "checkIsogram mixed case",
  actual: checkIsogram("Alphabet"),
  expected: false,
});

test({
  description: "checkIsogram hyphens",
  actual: checkIsogram("six-year-old"),
  expected: true,
});
