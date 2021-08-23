const convertWord = (word) => {
  const vowelSound = /^([aeiou]|xr|yt)/;

  const hasVowelSound = vowelSound.test(word);

  if (hasVowelSound) {
    return `${word}ay`;
  }

  const consonantSound = /^([^aeiou]+(?=y)|[^aeiou]?qu|[^aeiou]+)([a-z]+)/;

  const replacedCaptureGroups = word.replace(consonantSound, "$2$1");

  return `${replacedCaptureGroups}ay`;
};

const convertPigLatin = (english) => {
  const words = english.split(" ");

  const pigLatin = words.map((word) => convertWord(word)).join(" ");

  return pigLatin;
};

export default convertPigLatin;
