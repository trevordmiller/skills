const checkIsbn10 = (code) => {
  const empty = code === "";

  if (empty) {
    return false;
  }

  const lastCharacter = code.slice(-1);

  const check = lastCharacter === "X" ? 10 : Number(lastCharacter);

  const validCheck = check <= 10;

  if (!validCheck) {
    return false;
  }

  const digits = code
    .replaceAll("-", "")
    .slice(0, 9)
    .split("")
    .map((digit) => Number(digit));

  const validDigits = digits.length === 9 &&
    digits.every((digit) => digit <= 9);

  if (!validDigits) {
    return false;
  }

  const [A, B, C, D, E, F, G, H, I] = digits;

  const checksum = (
    A * 10 +
    B * 9 +
    C * 8 +
    D * 7 +
    E * 6 +
    F * 5 +
    G * 4 +
    H * 3 +
    I * 2 +
    check * 1
  ) % 11;

  const isIsbn10 = checksum === 0;

  return isIsbn10;
};

export default checkIsbn10;
