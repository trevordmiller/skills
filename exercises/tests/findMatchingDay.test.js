import test from "./test.js";
import findMatchingDay from "../src/findMatchingDay.js";

test({
  description: "findMatchingDay baseline",
  actual: findMatchingDay("first Monday of January 2000"),
  expected: "2000-01-03",
});

test({
  description: "findMatchingDay first",
  actual: findMatchingDay("first Sunday of May 1995"),
  expected: "1995-05-07",
});

test({
  description: "findMatchingDay last",
  actual: findMatchingDay("last Wednesday of July 2007"),
  expected: "2007-07-25",
});

test({
  description: "findMatchingDay second",
  actual: findMatchingDay("second Thursday of September 2013"),
  expected: "2013-09-12",
});

test({
  description: "findMatchingDay third",
  actual: findMatchingDay("third Tuesday of February 2020"),
  expected: "2020-02-18",
});

test({
  description: "findMatchingDay fourth",
  actual: findMatchingDay("fourth Friday of November 1980"),
  expected: "1980-11-28",
});
