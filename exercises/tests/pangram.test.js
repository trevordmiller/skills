import test from "./test.js";
import pangram from "../src/pangram.js";

test({
  description: "pangram baseline",
  actual: pangram("the quick brown fox jumps over the lazy dog"),
  expected: true,
});

test({
  description: "pangram missing letters",
  actual: pangram("the quick brown fox"),
  expected: false,
});

test({
  description: "pangram mixed case",
  actual: pangram("the quick brown fox jumps over the lazy dog"),
  expected: true,
});

test({
  description: "pangram punctuation",
  actual: pangram("'Five quacking Zephyrs jolt my wax bed.'"),
  expected: true,
});

test({
  description: "pangram missing letter x",
  actual: pangram(
    "a quick movement of the enemy will jeopardize five gunboats",
  ),
  expected: false,
});

test({
  description: "pangram missing letter h",
  actual: pangram("five boxing wizards jump quickly at it"),
  expected: false,
});

test({
  description: "pangram underscores",
  actual: pangram("the_quick_brown_fox_jumps_over_the_lazy_dog"),
  expected: true,
});

test({
  description: "pangram numbers",
  actual: pangram("the 1 quick brown fox jumps over the 2 lazy dogs"),
  expected: true,
});

test({
  description: "pangram exact lower case",
  actual: pangram("abcdefghijklmnopqrstuvwxyz"),
  expected: true,
});

test({
  description: "pangram exact upper case",
  actual: pangram("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  expected: true,
});

test({
  description: "pangram exact mixed case",
  actual: pangram("aBCDeFGHIJKLmNOPQRSTuVWXyz"),
  expected: true,
});

test({
  description: "pangram empty",
  actual: pangram(""),
  expected: false,
});
