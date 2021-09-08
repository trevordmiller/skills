import test from "./test.js";
import concealMessage from "../src/concealMessage.js";

test({
  description: "concealMessage basic",
  actual: concealMessage({
    message: "iamapandabear",
    key: "ddddddddddddd",
  }),
  expected: "ldpdsdqgdehdu",
});

test({
  description: "concealMessage shift 0",
  actual: concealMessage({
    message: "iamapandabear",
    key: "aaaaaaaaaaaaa",
  }),
  expected: "iamapandabear",
});

test({
  description: "concealMessage shift 1",
  actual: concealMessage({
    message: "iamapandabear",
    key: "bbbbbbbbbbbbb",
  }),
  expected: "jbnbqboebcfbs",
});

test({
  description: "concealMessage shift 5",
  actual: concealMessage({
    message: "iamapandabear",
    key: "eeeeeeeeeeeee",
  }),
  expected: "meqeterhefiev",
});

test({
  description: "concealMessage wrap around",
  actual: concealMessage({
    message: "iamapandabear",
    key: "zzzzzzzzzzzzz",
  }),
  expected: "hzlzozmczadzq",
});

test({
  description: "concealMessage mixed key",
  actual: concealMessage({
    message: "iamapandabear",
    key: "iamapandabear",
  }),
  expected: "qayaeaagaciai",
});
