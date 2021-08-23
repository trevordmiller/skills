const calculateTriangleType = (sideMeasurements) => {
  const sideLengths = sideMeasurements
    .split(" ")
    .map((length) => Number(length));

  const [sideA, sideB, sideC] = sideLengths;

  if (sideA === sideB && sideB === sideC && sideA === sideC) {
    return "equilateral";
  }

  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return "isosceles";
  }

  return "scalene";
};

export default calculateTriangleType;
