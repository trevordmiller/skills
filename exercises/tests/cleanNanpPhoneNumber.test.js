import test from "./test.js";
import cleanNanpPhoneNumber from "../src/cleanNanpPhoneNumber.js";

test({
  description: "cleanNanpPhoneNumber hyphens",
  actual: cleanNanpPhoneNumber("613-995-0253"),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber spaces",
  actual: cleanNanpPhoneNumber("613 995 0253"),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber multiple spaces",
  actual: cleanNanpPhoneNumber("613 995  0253     "),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber dots",
  actual: cleanNanpPhoneNumber("613.995.0253"),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber country code",
  actual: cleanNanpPhoneNumber("1 613 995 0253"),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber plus country code",
  actual: cleanNanpPhoneNumber("+1 613 995 0253"),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber mixed",
  actual: cleanNanpPhoneNumber("+1 (613) 995-0253"),
  expected: "6139950253",
});

test({
  description: "cleanNanpPhoneNumber digits",
  actual: cleanNanpPhoneNumber("12234567890"),
  expected: "2234567890",
});

test({
  description: "cleanNanpPhoneNumber invalid country code not 1",
  actual: cleanNanpPhoneNumber("72234567890"),
  expected: null,
});

test({
  description: "cleanNanpPhoneNumber invalid area code starting below 2",
  actual: cleanNanpPhoneNumber("(023) 456-7890"),
  expected: null,
});

test({
  description: "cleanNanpPhoneNumber invalid exchange code starting below 2",
  actual: cleanNanpPhoneNumber("(223) 156-7890"),
  expected: null,
});

test({
  description: "cleanNanpPhoneNumber invalid missing digits below 10",
  actual: cleanNanpPhoneNumber("555555555"),
  expected: null,
});

test({
  description: "cleanNanpPhoneNumber invalid extra digits above 11",
  actual: cleanNanpPhoneNumber("155555555555"),
  expected: null,
});
