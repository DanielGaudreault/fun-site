// Jokes Data
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
];

// Facts Data
const facts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
  "Octopuses have three hearts. Two pump blood to the gills, and one pumps it to the rest of the body.",
  "Bananas are berries, but strawberries aren't.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
  "A day on Venus is longer than a year on Venus.",
];

// DOM Elements
const jokeText = document.getElementById("joke-text");
const jokeBtn = document.getElementById("joke-btn");
const factText = document.getElementById("fact-text");
const factBtn = document.getElementById("fact-btn");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const gameResult = document.getElementById("game-result");

// Joke Generator
jokeBtn.addEventListener("click", () => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeText.textContent = randomJoke;
});

// Random Fact Generator
factBtn.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factText.textContent = randomFact;
});

// Mini-Game: Guess the Number
const correctNumber = Math.floor(Math.random() * 10) + 1;
guessBtn.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);
  if (userGuess === correctNumber) {
    gameResult.textContent = "🎉 Correct! You guessed it!";
  } else {
    gameResult.textContent = "❌ Wrong! Try again!";
  }
});

// Share Buttons
document.getElementById("share-twitter").addEventListener("click", () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check out this fun site!");
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
});

document.getElementById("share-facebook").addEventListener("click", () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
});
