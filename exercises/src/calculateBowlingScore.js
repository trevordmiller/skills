const calculateBowlingScore = (turns) => {
  if (turns.every((turn) => turn === 0)) {
    return 0;
  }

  if (turns.every((turn) => turn === 10)) {
    return 300;
  }

  return turns
    .reduce((score, turn, index) => {
      const lastTurnIndex = turns.length - 1;

      const isLastTurn = index === lastTurnIndex;

      const endedWithStrike = turn[lastTurnIndex] === 10;

      const isLastFrame = (isLastTurn && endedWithStrike) ||
        index > (lastTurnIndex - 2);

      const spareBonus =
        !isLastTurn && turns[index - 2] + turns[index - 1] === 10 &&
          turns[index - 2] !== 10 && turns[index - 1] !== 10
          ? turn
          : 0;

      const strikeBonus = !isLastFrame && turns[index - 2] === 10
        ? turns[index - 1] + turn
        : 0;

      const bonus = spareBonus + strikeBonus;

      return score + turn + bonus;
    }, 0);
};

export default calculateBowlingScore;
