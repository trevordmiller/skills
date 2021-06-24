import test from "./test.js";
import checkLetterBalance from "../src/checkLetterBalance.js";

test({
  description: "checkLetterBalance basic",
  actual: checkLetterBalance("xxxyyy"),
  expected: true,
});

test({
  description: "checkLetterBalance basic imbalanced",
  actual: checkLetterBalance("xxxyyyy"),
  expected: false,
});

test({
  description: "checkLetterBalance long",
  actual: checkLetterBalance("yyxyxxyxxyyyyxxxyxyx"),
  expected: true,
});

test({
  description: "checkLetterBalance long imbalanced",
  actual: checkLetterBalance("xyxxxxyyyxyxxyxxyy"),
  expected: false,
});

test({
  description: "checkLetterBalance empty",
  actual: checkLetterBalance(""),
  expected: true,
});

test({
  description: "checkLetterBalance single character",
  actual: checkLetterBalance("x"),
  expected: false,
});
