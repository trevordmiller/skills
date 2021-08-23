import test from "./test.js";
import countWordOccurrences from "../src/countWordOccurrences.js";

test({
  description: "countWordOccurrences basic",
  actual: countWordOccurrences("hello world"),
  expected: ({
    hello: 1,
    world: 1,
  }),
});

test({
  description: "countWordOccurrences single word",
  actual: countWordOccurrences("hi"),
  expected: ({
    hi: 1,
  }),
});

test({
  description: "countWordOccurrences single occurences",
  actual: countWordOccurrences("howdy my neighbor"),
  expected: ({
    howdy: 1,
    my: 1,
    neighbor: 1,
  }),
});

test({
  description: "countWordOccurrences sorted",
  actual: countWordOccurrences("have a nice day"),
  expected: ({
    a: 1,
    day: 1,
    have: 1,
    nice: 1,
  }),
});

test({
  description: "countWordOccurrences multiple occurences",
  actual: countWordOccurrences("one fish two fish red fish blue fish"),
  expected: ({
    blue: 1,
    fish: 4,
    one: 1,
    red: 1,
    two: 1,
  }),
});

test({
  description: "countWordOccurrences multiple cases",
  actual: countWordOccurrences("go Go GO Stop stop"),
  expected: ({
    go: 3,
    stop: 2,
  }),
});

test({
  description: "countWordOccurrences comma separators",
  actual: countWordOccurrences("one,two,three"),
  expected: ({
    one: 1,
    three: 1,
    two: 1,
  }),
});

test({
  description: "countWordOccurrences whitespace",
  actual: countWordOccurrences("\tone\ntwo         three"),
  expected: ({
    one: 1,
    three: 1,
    two: 1,
  }),
});

test({
  description: "countWordOccurrences contraction apostrophes",
  actual: countWordOccurrences("First don't laugh, then don't cry"),
  expected: ({
    cry: 1,
    "don't": 2,
    first: 1,
    laugh: 1,
    then: 1,
  }),
});

test({
  description: "countWordOccurrences possessive apostrophes",
  actual: countWordOccurrences("My sister's friends' investments."),
  expected: ({
    "friends'": 1,
    "investments": 1,
    "my": 1,
    "sister's": 1,
  }),
});

test({
  description: "countWordOccurrences proclitic apostrophes",
  actual: countWordOccurrences("'Tis true."),
  expected: ({
    "'tis": 1,
    "true": 1,
  }),
});

test({
  description: "countWordOccurrences non-word punctuation",
  actual: countWordOccurrences(
    "it's like car: carpet as java: javascript it's!!&@$%^&'",
  ),
  expected: ({
    as: 1,
    car: 1,
    carpet: 1,
    "it's": 2,
    java: 1,
    javascript: 1,
    like: 1,
  }),
});

test({
  description: "countWordOccurrences double quotations",
  actual: countWordOccurrences(`Joe can't tell between "large" and large.`),
  expected: ({
    and: 1,
    between: 1,
    "can't": 1,
    joe: 1,
    large: 2,
    tell: 1,
  }),
});

test({
  description: "countWordOccurrences single quotations",
  actual: countWordOccurrences("Joe can't tell between 'large' and large."),
  expected: ({
    and: 1,
    between: 1,
    "can't": 1,
    joe: 1,
    large: 2,
    tell: 1,
  }),
});

test({
  description: "countWordOccurrences numbers",
  actual: countWordOccurrences("testing, 1, 2 testing"),
  expected: ({
    1: 1,
    2: 1,
    testing: 2,
  }),
});

test({
  description: "countWordOccurrences substrings",
  actual: countWordOccurrences("Joe can't tell between app, apple and a."),
  expected: ({
    a: 1,
    and: 1,
    app: 1,
    apple: 1,
    between: 1,
    "can't": 1,
    joe: 1,
    tell: 1,
  }),
});

test({
  description: "countWordOccurrences complex",
  actual: countWordOccurrences(
    `"That's the password: PASSWORD 123!", cried the Special Agent.\nSo I fled,\n,one,\n ,two \n 'three'`,
  ),
  expected: ({
    123: 1,
    agent: 1,
    cried: 1,
    fled: 1,
    i: 1,
    one: 1,
    password: 2,
    so: 1,
    special: 1,
    "that's": 1,
    the: 2,
    three: 1,
    two: 1,
  }),
});
