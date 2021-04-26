import test from "./test.js";
import meetup from "../src/meetup.js";

test({
  description: "meetup baseline",
  actual: meetup("first Monday of January 2000"),
  expected: "2000-01-03",
});

test({
  description: "meetup first",
  actual: meetup("first Sunday of May 1995"),
  expected: "1995-05-07",
});

test({
  description: "meetup last",
  actual: meetup("last Wednesday of July 2007"),
  expected: "2007-07-25",
});

test({
  description: "meetup second",
  actual: meetup("second Thursday of September 2013"),
  expected: "2013-09-12",
});

test({
  description: "meetup third",
  actual: meetup("third Tuesday of February 2020"),
  expected: "2020-02-18",
});

test({
  description: "meetup fourth",
  actual: meetup("fourth Friday of November 1980"),
  expected: "1980-11-28",
});
