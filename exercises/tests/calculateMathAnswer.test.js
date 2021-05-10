import test from "./test.js";
import calculateMathAnswer from "../src/calculateMathAnswer.js";

test({
  description: "calculateMathAnswer baseline",
  actual: calculateMathAnswer("What is 40 plus 2?"),
  expected: "The answer is 42.",
});

test({
  description: "calculateMathAnswer just a number",
  actual: calculateMathAnswer("What is 5?"),
  expected: "The answer is 5.",
});

test({
  description: "calculateMathAnswer addition",
  actual: calculateMathAnswer("What is 1 plus 1?"),
  expected: "The answer is 2.",
});

test({
  description: "calculateMathAnswer more addition",
  actual: calculateMathAnswer("What is 53 plus 2?"),
  expected: "The answer is 55.",
});

test({
  description: "calculateMathAnswer addition with negative numbers",
  actual: calculateMathAnswer("What is -1 plus -10?"),
  expected: "The answer is -11.",
});

test({
  description: "calculateMathAnswer large addition",
  actual: calculateMathAnswer("What is 123 plus 45678?"),
  expected: "The answer is 45801.",
});

test({
  description: "calculateMathAnswer subtraction",
  actual: calculateMathAnswer("What is 4 minus -12?"),
  expected: "The answer is 16.",
});

test({
  description: "calculateMathAnswer multiplication",
  actual: calculateMathAnswer("What is -3 multiplied by 25?"),
  expected: "The answer is -75.",
});

test({
  description: "calculateMathAnswer division",
  actual: calculateMathAnswer("What is 33 divided by -3?"),
  expected: "The answer is -11.",
});

test({
  description: "calculateMathAnswer multiple additions",
  actual: calculateMathAnswer("What is 1 plus 1 plus 1?"),
  expected: "The answer is 3.",
});

test({
  description: "calculateMathAnswer addition and subtraction",
  actual: calculateMathAnswer("What is 1 plus 5 minus -2?"),
  expected: "The answer is 8.",
});

test({
  description: "calculateMathAnswer multiple subtraction",
  actual: calculateMathAnswer("What is 20 minus 4 minus 13?"),
  expected: "The answer is 3.",
});

test({
  description: "calculateMathAnswer subtraction then addition",
  actual: calculateMathAnswer("What is 17 minus 6 plus 3?"),
  expected: "The answer is 14.",
});

test({
  description: "calculateMathAnswer multiple multiplication",
  actual: calculateMathAnswer("What is 2 multiplied by -2 multiplied by 3?"),
  expected: "The answer is -12.",
});

test({
  description: "calculateMathAnswer multiple division",
  actual: calculateMathAnswer("What is -12 divided by 2 divided by -3?"),
  expected: "The answer is 2.",
});

test({
  description: "calculateMathAnswer not math",
  actual: calculateMathAnswer("Who is the President of the United States?"),
  expected: "Please try again.",
});
