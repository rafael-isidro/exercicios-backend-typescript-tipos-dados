const spellAWord = (word: string): string => {
    return word.split('').join('-');
};

console.log(spellAWord("abracadabra"));
