import test from "./test.js";
import acronym from "../src/acronym.js";

test({
  description: "acronym baseline",
  actual: acronym("Portable Network Graphics"),
  expected: "PNG",
});

test({
  description: "acronym empty",
  actual: acronym(""),
  expected: "",
});

test({
  description: "acronym casings",
  actual: acronym("Portable network graphics"),
  expected: "PNG",
});

test({
  description: "acronym long",
  actual: acronym(
    "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me",
  ),
  expected: "ROTFLSHTMDCOALM",
});

test({
  description: "acronym nested",
  actual: acronym("GNU Image Manipulation Program"),
  expected: "GIMP",
});

test({
  description: "acronym commas",
  actual: acronym("First In, First Out"),
  expected: "FIFO",
});

test({
  description: "acronym hyphens",
  actual: acronym("Something - I made up from thin air"),
  expected: "SIMUFTA",
});

test({
  description: "acronym compounds",
  actual: acronym("Complementary metal-oxide semiconductor"),
  expected: "CMOS",
});

test({
  description: "acronym apostrophes",
  actual: acronym("Halley's Comet"),
  expected: "HC",
});

test({
  description: "acronym underscores",
  actual: acronym("The Road _Not_ Taken"),
  expected: "TRNT",
});
