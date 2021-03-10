import test from "./test.js";
import morse from "../src/morse.js";

test({
  description: "morse baseline",
  actual: morse("daily"),
  expected: "-...-...-..-.--",
});
