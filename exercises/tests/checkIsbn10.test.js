import test from "./test.js";
import checkIsbn10 from "../src/checkIsbn10.js";

test({
  description: "checkIsbn10 basic",
  actual: checkIsbn10("3-598-21508-8"),
  expected: true,
});

test({
  description: "checkIsbn10 mismatched checksum",
  actual: checkIsbn10("3-598-21508-9"),
  expected: false,
});

test({
  description: "checkIsbn10 'X' character check digit",
  actual: checkIsbn10("3-598-21507-X"),
  expected: true,
});

test({
  description: "checkIsbn10 character check digit other than 'X'",
  actual: checkIsbn10("3-598-21507-A"),
  expected: false,
});

test({
  description: "checkIsbn10 character outside check digit",
  actual: checkIsbn10("3-598-2X507-9"),
  expected: false,
});

test({
  description: "checkIsbn10 without check digit",
  actual: checkIsbn10("3-598-21507"),
  expected: false,
});

test({
  description: "checkIsbn10 too long",
  actual: checkIsbn10("3-598-21507-3-8"),
  expected: false,
});

test({
  description: "checkIsbn10 too short",
  actual: checkIsbn10("3-598-21"),
  expected: false,
});

test({
  description: "checkIsbn10 empty",
  actual: checkIsbn10(""),
  expected: false,
});
