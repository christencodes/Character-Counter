"use strict";

const userInput = document.getElementById("userInput");

// ----------------

const totalCharactersResult = document.getElementById("total-result");
const wordCountResult = document.getElementById("word-result");
const sentenceCountResult = document.getElementById("sentence-result");

// ----------------

// console.log([...userInput.textContent]); this worked

userInput.addEventListener("keydown", (e) => {
  let currentUserInput = [...userInput.value];

  console.log("clickity clack");
  // e.preventDefault(); prevents typing in textArea element
  //update - totalCharactersResult
  //not registering 1st character for some reason
  analyzeText.characterCounter(currentUserInput);
  totalCharactersResult.textContent = analyzeText.characterCount;
  //update - wordCountResult
  //adding 1 for some reason
  analyzeText.wordCounter(userInput.value);
  wordCountResult.textContent = analyzeText.wordCount;
  //update - sentenceCountResult
  analyzeText.sentenceCounter(currentUserInput);
  sentenceCountResult.textContent = analyzeText.sentenceCount;
});

//create a function that takes 2 parameters

const analyzeText = {
  vowelsList: ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
  punctuationList: [".", "!", "?"],
  characterCount: 0,
  wordCount: 0,
  sentenceCount: 0,
  characterCounter(arr) {
    this.characterCount = 0;
    arr.forEach((element) => {
      element === " " ? null : this.characterCount++;
    });
  },
  wordCounter(str) {
    //str = userinput.textcontent
    this.wordCount = 0;
    this.wordCount += str.split(" ").length;
  },
  sentenceCounter(arr) {
    this.sentenceCount = 0;
    arr.forEach((element) => {
      this.punctuationList.includes(element) ? this.sentenceCount++ : null;
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
