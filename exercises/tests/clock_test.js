import test from "./test.js";
import clock from "../src/clock.js";

test({
  description: "clock baseline",
  actual: clock({
    hours: 6,
    minutes: 9,
  }),
  expected: "06:09",
});

test({
  description: "clock on the hour",
  actual: clock({
    hours: 8,
    minutes: 0,
  }),
  expected: "08:00",
});

test({
  description: "clock past the hour",
  actual: clock({
    hours: 11,
    minutes: 9,
  }),
  expected: "11:09",
});

test({
  description: "clock midnight is zero hours",
  actual: clock({
    hours: 24,
    minutes: 0,
  }),
  expected: "00:00",
});

test({
  description: "clock hour rolls over",
  actual: clock({
    hours: 25,
    minutes: 0,
  }),
  expected: "01:00",
});

test({
  description: "clock hour rolls over continuously",
  actual: clock({
    hours: 100,
    minutes: 0,
  }),
  expected: "04:00",
});

test({
  description: "clock sixty minutes is next hour",
  actual: clock({
    hours: 1,
    minutes: 60,
  }),
  expected: "02:00",
});

test({
  description: "clock minutes roll over",
  actual: clock({
    hours: 0,
    minutes: 160,
  }),
  expected: "02:40",
});

test({
  description: "clock minutes roll over continuously",
  actual: clock({
    hours: 0,
    minutes: 1723,
  }),
  expected: "04:43",
});

test({
  description: "clock hour and minutes roll over",
  actual: clock({
    hours: 25,
    minutes: 160,
  }),
  expected: "03:40",
});

test({
  description: "clock hour and minutes roll over continuously",
  actual: clock({
    hours: 201,
    minutes: 3001,
  }),
  expected: "11:01",
});

test({
  description: "clock hour and minutes roll over to midnight",
  actual: clock({
    hours: 72,
    minutes: 8640,
  }),
  expected: "00:00",
});
