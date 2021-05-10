const calculateResistorColorValue = (colors) => {
  const resistanceValueByColor = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };

  const resistanceValues = colors
    .slice(0, 2)
    .reduce((result, color) => `${result}${resistanceValueByColor[color]}`, "");

  return Number(resistanceValues);
};

export default calculateResistorColorValue;
