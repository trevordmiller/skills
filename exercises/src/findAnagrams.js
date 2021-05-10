const findAnagrams = ({ word, possibleAnagrams }) => {
  const getPossiblePermutations = (input) => {
    const result = [];

    const buildResult = (remaining, permutation = []) => {
      if (remaining.length === 0) {
        result.push(permutation);
      } else {
        for (let i = 0; i < remaining.length; i++) {
          const current = [...remaining];
          const next = current.splice(i, 1);
          buildResult(current.slice(), permutation.concat(next));
        }
      }
    };

    buildResult(input);

    return result.map((possiblePermutation) => possiblePermutation.join(""));
  };

  const letters = word.toLowerCase().split("");

  const possibleWords = getPossiblePermutations(letters).filter(
    (possiblePermutation) =>
      word.toLowerCase() !== possiblePermutation.toLowerCase(),
  );

  const matches = possibleAnagrams.filter((possibleAnagram) =>
    possibleWords.includes(possibleAnagram.toLowerCase())
  );

  return matches;
};

export default findAnagrams;
