const equalityCheck = (value1, value2) => {
  if (Array.isArray(value1)) {
    return JSON.stringify(value1) === JSON.stringify(value2);
  }

  if (typeof value1 === "object" && value1 !== null) {
    return JSON.stringify(value1) === JSON.stringify(value2);
  }

  return value1 === value2;
};

const test = ({ description, actual, expected }) => {
  if (equalityCheck(actual, expected)) {
    console.info(`✅ Passed: ${description}`);
  } else {
    console.error(`❌ Failed: ${description}`);
    console.error(`Actual:`, actual);
    console.error(`Expected:`, expected);
    throw new Error("Failing test");
  }
};

export default test;
