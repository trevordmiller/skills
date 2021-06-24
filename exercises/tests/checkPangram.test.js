import test from "./test.js";
import checkPangram from "../src/checkPangram.js";

test({
  description: "checkPangram basic",
  actual: checkPangram("the quick brown fox jumps over the lazy dog"),
  expected: true,
});

test({
  description: "checkPangram missing letters",
  actual: checkPangram("the quick brown fox"),
  expected: false,
});

test({
  description: "checkPangram mixed case",
  actual: checkPangram("the quick brown fox jumps over the lazy dog"),
  expected: true,
});

test({
  description: "checkPangram punctuation",
  actual: checkPangram("'Five quacking Zephyrs jolt my wax bed.'"),
  expected: true,
});

test({
  description: "checkPangram missing letter x",
  actual: checkPangram(
    "a quick movement of the enemy will jeopardize five gunboats",
  ),
  expected: false,
});

test({
  description: "checkPangram missing letter h",
  actual: checkPangram("five boxing wizards jump quickly at it"),
  expected: false,
});

test({
  description: "checkPangram underscores",
  actual: checkPangram("the_quick_brown_fox_jumps_over_the_lazy_dog"),
  expected: true,
});

test({
  description: "checkPangram numbers",
  actual: checkPangram("the 1 quick brown fox jumps over the 2 lazy dogs"),
  expected: true,
});

test({
  description: "checkPangram exact lower case",
  actual: checkPangram("abcdefghijklmnopqrstuvwxyz"),
  expected: true,
});

test({
  description: "checkPangram exact upper case",
  actual: checkPangram("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  expected: true,
});

test({
  description: "checkPangram exact mixed case",
  actual: checkPangram("aBCDeFGHIJKLmNOPQRSTuVWXyz"),
  expected: true,
});

test({
  description: "checkPangram empty",
  actual: checkPangram(""),
  expected: false,
});
