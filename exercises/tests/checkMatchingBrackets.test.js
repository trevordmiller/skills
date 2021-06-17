import test from "./test.js";
import checkMatchingBrackets from "../src/checkMatchingBrackets.js";

test({
  description: "checkMatchingBrackets baseline",
  actual: checkMatchingBrackets("Hello (world)"),
  expected: true,
});

test({
  description: "checkMatchingBrackets paired square brackets",
  actual: checkMatchingBrackets("[]"),
  expected: true,
});

test({
  description: "checkMatchingBrackets empty string",
  actual: checkMatchingBrackets(""),
  expected: true,
});

test({
  description: "checkMatchingBrackets unpaired brackets",
  actual: checkMatchingBrackets("[["),
  expected: false,
});

test({
  description: "checkMatchingBrackets wrong ordered brackets",
  actual: checkMatchingBrackets("}{"),
  expected: false,
});

test({
  description: "checkMatchingBrackets wrong closing bracket",
  actual: checkMatchingBrackets("{]"),
  expected: false,
});

test({
  description: "checkMatchingBrackets paired with whitespace",
  actual: checkMatchingBrackets("{ }"),
  expected: true,
});

test({
  description: "checkMatchingBrackets partially paired brackets",
  actual: checkMatchingBrackets("{[])"),
  expected: false,
});

test({
  description: "checkMatchingBrackets simple nested brackets",
  actual: checkMatchingBrackets("{[]}"),
  expected: true,
});

test({
  description: "checkMatchingBrackets several paired brackets",
  actual: checkMatchingBrackets("{}[]"),
  expected: true,
});

test({
  description: "checkMatchingBrackets paired and nested brackets",
  actual: checkMatchingBrackets("([{}({}[])])"),
  expected: true,
});

test({
  description: "checkMatchingBrackets unopened closing brackets",
  actual: checkMatchingBrackets("{[)][]}"),
  expected: false,
});

test({
  description: "checkMatchingBrackets unpaired and nested brackets",
  actual: checkMatchingBrackets("([{])"),
  expected: false,
});

test({
  description: "checkMatchingBrackets paired and wrong nested brackets",
  actual: checkMatchingBrackets("[({]})"),
  expected: false,
});

test({
  description: "checkMatchingBrackets paired and incomplete brackets",
  actual: checkMatchingBrackets("{}["),
  expected: false,
});

test({
  description: "checkMatchingBrackets too many closing brackets",
  actual: checkMatchingBrackets("[]]"),
  expected: false,
});

test({
  description: "checkMatchingBrackets math expression",
  actual: checkMatchingBrackets("(((185 + 223.85) * 15) - 543)/2"),
  expected: true,
});

test({
  description: "checkMatchingBrackets complex latex expression",
  actual: checkMatchingBrackets(
    "\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)",
  ),
  expected: true,
});
