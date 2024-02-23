const sentence = "Saya sangat senang mengerjakan soal algoritma";

const longest = (inputSentence) => { 
  const splitEveryWords = inputSentence.split(" ");

  const theLongestWord = splitEveryWords.reduce((currentWord, longest) => {
    if(currentWord.length > longest.length) {
      return currentWord
    } else {
      return longest
    }
  }, "");

  const wordsLength = splitEveryWords.map(word => word.length);

  const longestWord = Math.max(...wordsLength)

  console.log(`${theLongestWord}: ${longestWord} characters`);
};

longest(sentence);