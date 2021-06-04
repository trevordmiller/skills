const countWordOccurrences = (phrase) => {
  const words = phrase
    .toLowerCase()
    .match(/[a-z0-9']+/g, "")
    .filter((word) => /[a-z0-9]/g.test(word))
    .map((word) => {
      const match = word.match(/^'(.+)'$/);
      return match ? match[1] : word;
    })
    .sort();

  const wordOccurences = words.reduce((result, word) => {
    const count = result[word] || 0;

    return ({
      ...result,
      [word]: count + 1,
    });
  }, ({}));

  return wordOccurences;
};

export default countWordOccurrences;
