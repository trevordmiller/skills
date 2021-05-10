import test from "./test.js";
import addGigasecond from "../src/addGigasecond.js";

test({
  description: "addGigasecond baseline",
  actual: addGigasecond("2011-04-25T00:00:00.000Z"),
  expected: "2043-01-01T01:46:40.000Z",
});

test({
  description: "addGigasecond without day roll-over",
  actual: addGigasecond("1977-06-13T00:00:00.000Z"),
  expected: "2009-02-19T01:46:40.000Z",
});

test({
  description: "addGigasecond with day roll-over",
  actual: addGigasecond("2015-01-24T23:59:59.000Z"),
  expected: "2046-10-03T01:46:39.000Z",
});

test({
  description: "addGigasecond before unix epoch",
  actual: addGigasecond("1959-07-19T00:00:00.000Z"),
  expected: "1991-03-27T01:46:40.000Z",
});
