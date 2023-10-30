const spellAWord = (word: string): string => {
  let result: string = "";
  for (let i = 0; i < word.length; i++) {
    i !== word.length - 1 ? (result += word[i] + "-") : (result += word[i]);
  }

  return result;
};

console.log(spellAWord("abracadabra"));
