const getAcronym = (phrase) =>
  phrase
    .replace("_", "")
    .replace("- ", "")
    .replace("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

export default getAcronym;
