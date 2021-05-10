const calculateMaximumYahtzeeScore = (roll) => {
  const calculatePossibleScore = (roll, number) =>
    roll.filter((dice) => dice === number).length * number;

  const possibleScores = [
    calculatePossibleScore(roll, 1),
    calculatePossibleScore(roll, 2),
    calculatePossibleScore(roll, 3),
    calculatePossibleScore(roll, 4),
    calculatePossibleScore(roll, 5),
    calculatePossibleScore(roll, 6),
  ];

  return Math.max(...possibleScores);
};

export default calculateMaximumYahtzeeScore;
