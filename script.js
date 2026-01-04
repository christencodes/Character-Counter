"use strict";

const userInput = document.getElementById("userInput");

// ----------------

const totalCharactersResult = document.getElementById("total-result");
const wordCountResult = document.getElementById("word-result");
const sentenceCountResult = document.getElementById("sentence-result");

//? Options ----------------------
const characterLimitOption = document.getElementById("character-limit");
const characterLimitInput = document.getElementById("character-limit-input");

const time = document.getElementById("time");

// ----------------

const barA = document.querySelector(".bar-percent-A");
const barE = document.querySelector(".bar-percent-E");
const barI = document.querySelector(".bar-percent-I");
const barO = document.querySelector(".bar-percent-O");
const barU = document.querySelector(".bar-percent-U");

const barsArray = [barA, barE, barI, barO, barU];

// *Event Listeners
userInput.addEventListener("keydown", (e) => {
  let currentUserInput = [...userInput.value];

  // console.log("clickity clack");
  // e.preventDefault(); prevents typing in textArea element
  //!Place in function. This looks messy!-----------------
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
  //!------------------------------------------

  analyzeText.updateVowelUI(currentUserInput);
  time.textContent = analyzeText.readingTime();

  !characterLimitInput.classList.contains("hide-me")
    ? (userInput.maxlength = characterLimitInput.value)
    : null;

  analyzeText.characterCount >= userInput.maxlength
    ? (userInput.disabled = true)
    : (userInput.disabled = false);
});

document.addEventListener("keydown", (e) => {
  // e.key === "Backspace" ? (userInput.disabled = false) : null;

  if (e.key === "Backspace") {
    userInput.focus();
    userInput.disabled = false;
  }
});

characterLimitOption.addEventListener("click", () => {
  characterLimitInput.classList.toggle("hide-me");
});

// * Objects
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
    //!This is an issue. Word Count needs to be resolved. UI not accurate.
    this.wordCount += str.split(" ").length;
  },
  sentenceCounter(arr) {
    this.sentenceCount = 0;
    arr.forEach((element) => {
      this.punctuationList.includes(element) ? this.sentenceCount++ : null;
    });
  },
  densityCounter(arr) {
    for (const vowel in this.vowelsCount) {
      // console.log(vowel);
      this.vowelsCount[vowel] = 0;
    }

    arr.forEach((element) => {
      if (this.vowelsList.includes(element)) {
        this.vowelsCount[element]++;
        // console.log(`${element} : ${this.vowelsCount[element]}`);
      }
    });
    console.log("done");
  },
  updateVowelUI(arr) {
    this.densityCounter(arr);
    //I need the character count
    // (part / whole) * 100

    barA.style.width = `${this.djPettiHelperFunction(
      this.vowelsCount.a,
      this.characterCount
    )}%`;
    barE.style.width = `${this.djPettiHelperFunction(
      this.vowelsCount.e,
      this.characterCount
    )}%`;
    barI.style.width = `${this.djPettiHelperFunction(
      this.vowelsCount.i,
      this.characterCount
    )}%`;
    barO.style.width = `${this.djPettiHelperFunction(
      this.vowelsCount.o,
      this.characterCount
    )}%`;
    barU.style.width = `${this.djPettiHelperFunction(
      this.vowelsCount.u,
      this.characterCount
    )}%`;
  },

  djPettiHelperFunction(vowelCount, chracterCount) {
    return Math.floor((vowelCount / chracterCount) * 100);
  },

  readingTime() {
    //* ReadingTime = Total Word Count  / WPM (200)
    return `${Math.round(this.wordCount / 200)}`;
  },

  vowelsCount: {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  },
};
