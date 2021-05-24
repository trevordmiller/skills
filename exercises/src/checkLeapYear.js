const checkLeapYear = (year) => {
  const yearNumber = Number(year);
  const result = yearNumber % 400 === 0 ||
    (yearNumber % 4 === 0 && yearNumber % 100 !== 0);

  return result;
};

export default checkLeapYear;
