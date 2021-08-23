import test from "./test.js";
import convertClockTimestamp from "../src/convertClockTimestamp.js";

test({
  description: "convertClockTimestamp basic",
  actual: convertClockTimestamp({
    hours: 6,
    minutes: 9,
  }),
  expected: "06:09",
});

test({
  description: "convertClockTimestamp on the hour",
  actual: convertClockTimestamp({
    hours: 8,
    minutes: 0,
  }),
  expected: "08:00",
});

test({
  description: "convertClockTimestamp past the hour",
  actual: convertClockTimestamp({
    hours: 11,
    minutes: 9,
  }),
  expected: "11:09",
});

test({
  description: "convertClockTimestamp midnight is zero hours",
  actual: convertClockTimestamp({
    hours: 24,
    minutes: 0,
  }),
  expected: "00:00",
});

test({
  description: "convertClockTimestamp hour rolls over",
  actual: convertClockTimestamp({
    hours: 25,
    minutes: 0,
  }),
  expected: "01:00",
});

test({
  description: "convertClockTimestamp hour rolls over continuously",
  actual: convertClockTimestamp({
    hours: 100,
    minutes: 0,
  }),
  expected: "04:00",
});

test({
  description: "convertClockTimestamp sixty minutes is next hour",
  actual: convertClockTimestamp({
    hours: 1,
    minutes: 60,
  }),
  expected: "02:00",
});

test({
  description: "convertClockTimestamp minutes roll over",
  actual: convertClockTimestamp({
    hours: 0,
    minutes: 160,
  }),
  expected: "02:40",
});

test({
  description: "convertClockTimestamp minutes roll over continuously",
  actual: convertClockTimestamp({
    hours: 0,
    minutes: 1723,
  }),
  expected: "04:43",
});

test({
  description: "convertClockTimestamp hour and minutes roll over",
  actual: convertClockTimestamp({
    hours: 25,
    minutes: 160,
  }),
  expected: "03:40",
});

test({
  description: "convertClockTimestamp hour and minutes roll over continuously",
  actual: convertClockTimestamp({
    hours: 201,
    minutes: 3001,
  }),
  expected: "11:01",
});

test({
  description: "convertClockTimestamp hour and minutes roll over to midnight",
  actual: convertClockTimestamp({
    hours: 72,
    minutes: 8640,
  }),
  expected: "00:00",
});
