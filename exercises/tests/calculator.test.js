import test from "./test.js";
import calculator from "../src/calculator.js";

test({
  description: "calculator baseline",
  actual: calculator("What is 40 plus 2?"),
  expected: "The answer is 42.",
});

test({
  description: "calculator just a number",
  actual: calculator("What is 5?"),
  expected: "The answer is 5.",
});

test({
  description: "calculator addition",
  actual: calculator("What is 1 plus 1?"),
  expected: "The answer is 2.",
});

test({
  description: "calculator more addition",
  actual: calculator("What is 53 plus 2?"),
  expected: "The answer is 55.",
});

test({
  description: "calculator addition with negative numbers",
  actual: calculator("What is -1 plus -10?"),
  expected: "The answer is -11.",
});

test({
  description: "calculator large addition",
  actual: calculator("What is 123 plus 45678?"),
  expected: "The answer is 45801.",
});

test({
  description: "calculator subtraction",
  actual: calculator("What is 4 minus -12?"),
  expected: "The answer is 16.",
});

test({
  description: "calculator multiplication",
  actual: calculator("What is -3 multiplied by 25?"),
  expected: "The answer is -75.",
});

test({
  description: "calculator division",
  actual: calculator("What is 33 divided by -3?"),
  expected: "The answer is -11.",
});

test({
  description: "calculator multiple additions",
  actual: calculator("What is 1 plus 1 plus 1?"),
  expected: "The answer is 3.",
});

test({
  description: "calculator addition and subtraction",
  actual: calculator("What is 1 plus 5 minus -2?"),
  expected: "The answer is 8.",
});

test({
  description: "calculator multiple subtraction",
  actual: calculator("What is 20 minus 4 minus 13?"),
  expected: "The answer is 3.",
});

test({
  description: "calculator subtraction then addition",
  actual: calculator("What is 17 minus 6 plus 3?"),
  expected: "The answer is 14.",
});

test({
  description: "calculator multiple multiplication",
  actual: calculator("What is 2 multiplied by -2 multiplied by 3?"),
  expected: "The answer is -12.",
});

test({
  description: "calculator multiple division",
  actual: calculator("What is -12 divided by 2 divided by -3?"),
  expected: "The answer is 2.",
});

test({
  description: "calculator not math",
  actual: calculator("Who is the President of the United States?"),
  expected: "Please try again.",
});
