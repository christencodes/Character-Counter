"use strict";

const userInput = document.getElementById("userInput");

console.log([...userInput.textContent]);

const analyzeText = {
  vowelsList: [a, e, i, o, u],
  wordList: [" ", "."],
  othersList: ["!", "?", "."],
  characterCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  characterCounter() {},
  wordCounter() {},
  sentenceCounter(arr) {
    arr.forEach((element) => {
      if (element === ".") {
        this.sentenceCount++;
      }
    });
  },
  densityCounter(arr) {
    arr.forEach((element) => {
      if (this.vowelsList.includes(element)) {
        this.vowelsCount[element]++;
      }
    });
  },
  vowelsCount: {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  },
};

// const vowels = {
//   a: 0,
//   e: 0,
//   i: 0,
//   o: 0,
//   u: 0,
// };
