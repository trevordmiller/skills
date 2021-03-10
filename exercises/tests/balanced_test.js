import test from "./test.js";
import balanced from "../src/balanced.js";

test({
  description: "balanced baseline",
  actual: balanced("xxxyyy"),
  expected: true,
});

test({
  description: "balanced basic imbalanced",
  actual: balanced("xxxyyyy"),
  expected: false,
});

test({
  description: "balanced long",
  actual: balanced("yyxyxxyxxyyyyxxxyxyx"),
  expected: true,
});

test({
  description: "balanced long imbalanced",
  actual: balanced("xyxxxxyyyxyxxyxxyy"),
  expected: false,
});

test({
  description: "balanced empty",
  actual: balanced(""),
  expected: true,
});

test({
  description: "balanced single character",
  actual: balanced("x"),
  expected: false,
});
