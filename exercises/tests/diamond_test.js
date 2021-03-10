import test from "./test.js";
import diamond from "../src/diamond.js";

test({
  description: "diamond baseline",
  actual: diamond("N"),
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
  description: "diamond empty",
  actual: diamond(""),
  expected: [
    "",
  ],
});

test({
  description: "diamond single",
  actual: diamond("A"),
  expected: [
    "A",
  ],
});

test({
  description: "diamond odd",
  actual: diamond("C"),
  expected: [
    "  A  ",
    " B B ",
    "C   C",
    " B B ",
    "  A  ",
  ],
});

test({
  description: "diamond even",
  actual: diamond("D"),
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
  description: "diamond small",
  actual: diamond("B"),
  expected: [
    " A ",
    "B B",
    " A ",
  ],
});

test({
  description: "diamond large",
  actual: diamond("Z"),
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
