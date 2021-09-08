import test from "./test.js";
import generateDiamondAlphabet from "../src/generateDiamondAlphabet.js";

test({
  description: "generateDiamondAlphabet basic",
  actual: generateDiamondAlphabet("N"),
  expected: [
    "             A             ",
    "            B B            ",
    "           C   C           ",
    "          D     D          ",
    "         E       E         ",
    "        F         F        ",
    "       G           G       ",
    "      H             H      ",
    "     I               I     ",
    "    J                 J    ",
    "   K                   K   ",
    "  L                     L  ",
    " M                       M ",
    "N                         N",
    " M                       M ",
    "  L                     L  ",
    "   K                   K   ",
    "    J                 J    ",
    "     I               I     ",
    "      H             H      ",
    "       G           G       ",
    "        F         F        ",
    "         E       E         ",
    "          D     D          ",
    "           C   C           ",
    "            B B            ",
    "             A             ",
  ],
});

test({
  description: "generateDiamondAlphabet empty",
  actual: generateDiamondAlphabet(""),
  expected: [
    "",
  ],
});

test({
  description: "generateDiamondAlphabet single",
  actual: generateDiamondAlphabet("A"),
  expected: [
    "A",
  ],
});

test({
  description: "generateDiamondAlphabet odd",
  actual: generateDiamondAlphabet("C"),
  expected: [
    "  A  ",
    " B B ",
    "C   C",
    " B B ",
    "  A  ",
  ],
});

test({
  description: "generateDiamondAlphabet even",
  actual: generateDiamondAlphabet("D"),
  expected: [
    "   A   ",
    "  B B  ",
    " C   C ",
    "D     D",
    " C   C ",
    "  B B  ",
    "   A   ",
  ],
});

test({
  description: "generateDiamondAlphabet small",
  actual: generateDiamondAlphabet("B"),
  expected: [
    " A ",
    "B B",
    " A ",
  ],
});

test({
  description: "generateDiamondAlphabet large",
  actual: generateDiamondAlphabet("Z"),
  expected: [
    "                         A                         ",
    "                        B B                        ",
    "                       C   C                       ",
    "                      D     D                      ",
    "                     E       E                     ",
    "                    F         F                    ",
    "                   G           G                   ",
    "                  H             H                  ",
    "                 I               I                 ",
    "                J                 J                ",
    "               K                   K               ",
    "              L                     L              ",
    "             M                       M             ",
    "            N                         N            ",
    "           O                           O           ",
    "          P                             P          ",
    "         Q                               Q         ",
    "        R                                 R        ",
    "       S                                   S       ",
    "      T                                     T      ",
    "     U                                       U     ",
    "    V                                         V    ",
    "   W                                           W   ",
    "  X                                             X  ",
    " Y                                               Y ",
    "Z                                                 Z",
    " Y                                               Y ",
    "  X                                             X  ",
    "   W                                           W   ",
    "    V                                         V    ",
    "     U                                       U     ",
    "      T                                     T      ",
    "       S                                   S       ",
    "        R                                 R        ",
    "         Q                               Q         ",
    "          P                             P          ",
    "           O                           O           ",
    "            N                         N            ",
    "             M                       M             ",
    "              L                     L              ",
    "               K                   K               ",
    "                J                 J                ",
    "                 I               I                 ",
    "                  H             H                  ",
    "                   G           G                   ",
    "                    F         F                    ",
    "                     E       E                     ",
    "                      D     D                      ",
    "                       C   C                       ",
    "                        B B                        ",
    "                         A                         ",
  ],
});
