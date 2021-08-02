import test from "./test.js";
import convertPigLatin from "../src/convertPigLatin.js";

test({
  description: "convertPigLatin basic",
  actual: convertPigLatin("happy"),
  expected: "appyhay",
});

test({
  description: "convertPigLatin word beginning with a",
  actual: convertPigLatin("apple"),
  expected: "appleay",
});

test({
  description: "convertPigLatin word beginning with e",
  actual: convertPigLatin("ear"),
  expected: "earay",
});

test({
  description: "convertPigLatin word beginning with i",
  actual: convertPigLatin("igloo"),
  expected: "iglooay",
});

test({
  description: "convertPigLatin word beginning with o",
  actual: convertPigLatin("object"),
  expected: "objectay",
});

test({
  description: "convertPigLatin word beginning with u",
  actual: convertPigLatin("under"),
  expected: "underay",
});

test({
  description:
    "convertPigLatin word beginning with a vowel and followed by a qu",
  actual: convertPigLatin("equal"),
  expected: "equalay",
});

test({
  description: "convertPigLatin word beginning with p",
  actual: convertPigLatin("pig"),
  expected: "igpay",
});

test({
  description: "convertPigLatin word beginning with k",
  actual: convertPigLatin("koala"),
  expected: "oalakay",
});

test({
  description: "convertPigLatin word beginning with x",
  actual: convertPigLatin("xenon"),
  expected: "enonxay",
});

test({
  description: "convertPigLatin word beginning with q without a following u",
  actual: convertPigLatin("qat"),
  expected: "atqay",
});

test({
  description: "convertPigLatin word beginning with ch",
  actual: convertPigLatin("chair"),
  expected: "airchay",
});

test({
  description: "convertPigLatin word beginning with qu",
  actual: convertPigLatin("queen"),
  expected: "eenquay",
});

test({
  description:
    "convertPigLatin word beginning with qu and a preceding consonant",
  actual: convertPigLatin("square"),
  expected: "aresquay",
});

test({
  description: "convertPigLatin word beginning with th",
  actual: convertPigLatin("therapy"),
  expected: "erapythay",
});

test({
  description: "convertPigLatin word beginning with thr",
  actual: convertPigLatin("thrush"),
  expected: "ushthray",
});

test({
  description: "convertPigLatin word beginning with sch",
  actual: convertPigLatin("school"),
  expected: "oolschay",
});

test({
  description: "convertPigLatin word beginning with yt",
  actual: convertPigLatin("yttria"),
  expected: "yttriaay",
});

test({
  description: "convertPigLatin word beginning with xr",
  actual: convertPigLatin("xray"),
  expected: "xrayay",
});

test({
  description:
    "convertPigLatin y is treated like a consonant at the beginning of a word",
  actual: convertPigLatin("yellow"),
  expected: "ellowyay",
});

test({
  description:
    "convertPigLatin y is treated like a vowel at the end of a consonant cluster",
  actual: convertPigLatin("rhythm"),
  expected: "ythmrhay",
});

test({
  description: "convertPigLatin y as second letter in two letter word",
  actual: convertPigLatin("my"),
  expected: "ymay",
});

test({
  description: "convertPigLatin phrase",
  actual: convertPigLatin("quick fast run"),
  expected: "ickquay astfay unray",
});
