"use strict";

const userInput = document.getElementById("userInput");

console.log([...userInput.textContent]);

const packedUserInput = [...userInput.textContent];

const analyzeText = {
  vowelsList: ["a", "e", "i", "o", "u"],
  characterCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  characterCounter(arr) {
    arr.forEach((element) => {
      element === " " ? null : this.characterCount++;
    });
  },
  wordCounter(str) {
    this.wordCount += str.split(" ").length;
  },
  sentenceCounter(arr) {
    arr.forEach((element) => {
      element === "." ? this.sentenceCount++ : null;
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

//all functions in this array are based on destructuring in parameter

analyzeText.densityCounter(packedUserInput);
console.log(analyzeText.vowelsCount);
