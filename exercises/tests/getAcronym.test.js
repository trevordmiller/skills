import test from "./test.js";
import getAcronym from "../src/getAcronym.js";

test({
  description: "getAcronym baseline",
  actual: getAcronym("Portable Network Graphics"),
  expected: "PNG",
});

test({
  description: "getAcronym empty",
  actual: getAcronym(""),
  expected: "",
});

test({
  description: "getAcronym casings",
  actual: getAcronym("Portable network graphics"),
  expected: "PNG",
});

test({
  description: "getAcronym long",
  actual: getAcronym(
    "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me",
  ),
  expected: "ROTFLSHTMDCOALM",
});

test({
  description: "getAcronym nested",
  actual: getAcronym("GNU Image Manipulation Program"),
  expected: "GIMP",
});

test({
  description: "getAcronym commas",
  actual: getAcronym("First In, First Out"),
  expected: "FIFO",
});

test({
  description: "getAcronym hyphens",
  actual: getAcronym("Something - I made up from thin air"),
  expected: "SIMUFTA",
});

test({
  description: "getAcronym compounds",
  actual: getAcronym("Complementary metal-oxide semiconductor"),
  expected: "CMOS",
});

test({
  description: "getAcronym apostrophes",
  actual: getAcronym("Halley's Comet"),
  expected: "HC",
});

test({
  description: "getAcronym underscores",
  actual: getAcronym("The Road _Not_ Taken"),
  expected: "TRNT",
});
