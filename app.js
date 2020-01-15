import compareNumbers from './compare-numbers.js';

// Get DOM elements
const guessInput = document.getElementById('input-number');
const submitButton = document.getElementById('submit-button');
const attemptsRemaining = document.getElementById('attempts-remaining');
const highLow = document.getElementById('high-low');
const result = document.getElementById('result');

// Randomly generate and store correct number
let correctNumber = (Math.floor(Math.random() * 20));


// Set initial state of count to 4
let count = 4;


// Add event listener for button
submitButton.addEventListener('click', () => {

    // Change value of remaining attempts
    attemptsRemaining.textContent = count;

    // Convert string input to number
    const guessStr = guessInput.value;
    const guess = parseInt(guessStr);

    if (compareNumbers(guess, correctNumber) === 1) {
        // Return "too high" if guess > correct number
        highLow.textContent = `Guess again! ${guess} is too high.`;
        // Reduce count by 1
        count--;
    } else if (compareNumbers(guess, correctNumber) === -1) { 
        // Return "too low" if guess < correct number
        highLow.textContent = `Guess again! ${guess} is too low.`;
        // Reduce count by 1
        count--;
    } else if (compareNumbers(guess, correctNumber) === 0) {
        // Return "correct" and tell user they won if guess = correct number
        result.textContent = `${guess} is correct! You must have x-ray vision.`;
        submitButton.disabled = true;
        result.textContent = `Congratulations!`;
    }
    // Return losing message and disable button if run out of tries
    if (count === 0 && guess !== correctNumber) { 
        result.textContent = `You lost. Try again later.`;
        submitButton.disabled = true;
    }
}
);