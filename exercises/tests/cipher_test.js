import test from "./test.js";
import cipher from "../src/cipher.js";

test({
  description: "cipher baseline",
  actual: cipher({
    message: "iamapandabear",
    key: "ddddddddddddd",
  }),
  expected: "ldpdsdqgdehdu",
});

test({
  description: "cipher shift 0",
  actual: cipher({
    message: "iamapandabear",
    key: "aaaaaaaaaaaaa",
  }),
  expected: "iamapandabear",
});

test({
  description: "cipher shift 1",
  actual: cipher({
    message: "iamapandabear",
    key: "bbbbbbbbbbbbb",
  }),
  expected: "jbnbqboebcfbs",
});

test({
  description: "cipher shift 5",
  actual: cipher({
    message: "iamapandabear",
    key: "eeeeeeeeeeeee",
  }),
  expected: "meqeterhefiev",
});

test({
  description: "cipher wrap around",
  actual: cipher({
    message: "iamapandabear",
    key: "zzzzzzzzzzzzz",
  }),
  expected: "hzlzozmczadzq",
});

test({
  description: "cipher mixed key",
  actual: cipher({
    message: "iamapandabear",
    key: "iamapandabear",
  }),
  expected: "qayaeaagaciai",
});
