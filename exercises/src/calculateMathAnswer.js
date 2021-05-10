const operators = {
  plus: "+",
  minus: "-",
  multiplied: "*",
  divided: "/",
};

const calculateMathAnswer = (question) => {
  const parsedSteps = question
    .replace("?", "")
    .split(" ")
    .map((part) => isNaN(part) ? operators[part] : Number(part))
    .filter((part) => part);

  const answer = Function(`"use strict";return ${parsedSteps.join(" ")}`)();

  return isNaN(answer) ? "Please try again." : `The answer is ${answer}.`;
};

export default calculateMathAnswer;
