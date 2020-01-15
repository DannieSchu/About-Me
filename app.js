import compareNumbers from './compare-numbers.js';

// Get DOM elements
const guessInput = document.getElementById('input-number');
const submitButton = document.getElementById('submit-button');
const attemptsRemaining = document.getElementById('attempts-remaining');
const highLow = document.getElementById('high-low');
const result = document.getElementById('result');

// Randomly generate and store correct number
let correctNumber = Math.floor(Math.random) * 20;


// Set initial state of count to 4
let count = 4;


// Add event listener for button
submitButton.addEventListener('click', () => {
    console.log('button works!');

    // Reduce count by 1
    count--;

    // Change value of remaining attempts
    attemptsRemaining.textContent = count;

    // Convert string input to number
    const guessStr = guessInput.value;
    const guess = parseInt(guessStr);

    // Return result and estimate
    if (compareNumbers (guess, correctNumber) === 1) {
        highLow.textContent = 'too high.';
        if (count === 0) {
            result.textContent = 'You lost.';
        } 
    } else if (compareNumbers (guess, correctNumber) === -1) {
        highLow.textContent = 'too low.';
        if (count === 0) {
            result.textContent = 'You lost.';
        } 
    } else {
        highLow.textContent = 'correct';
        result.textContent = 'You won!';
    }
}
);