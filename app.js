import compareNumbers from './compare-numbers.js';

// Get DOM elements
const guessInput = document.getElementById('input-number');
const submitButton = document.getElementById('submit-button');
const attemptsRemaining = document.getElementById('attempt-remaining');
const highLow = document.getElementById('high-low');
const result = document.getElementById('result');

// Randomly generate and store correct number
let correctNumber = Math.floor(Math.random) * 20;


// Set initial state of count to 4
let count = 4;


// Add event listener for button
submitButton.addEventListener('click', () => {
    // Reduce count by 1
    count--;

    // Change value of remaining attempts
    attemptsRemaining.textContent = count;

    // Convert string input to number
    const guessStr = guessInput.value;
    const guess = parseInt(guessStr);

    // If compareNumbers returns 1
    if (compareNumbers (guess, correctNumber) === 1) {
        highLow.textContent = 'too high';
        if (count === 0) {
            result.textContent = "You lost.";
            //disable game play?
            return;
        } 
    } else if (compareNumbers (guess, correctNumber) === -1) {
        highLow.textContent = 'too low';
        if (count === 0) {
            result.textContent = 'You lost.';
            //disable game play?
            return;
        } 
    } else {
        highLow.textContent = 'correct';
        result.textContent = 'You won!';
        //disable game play?
        return;
    }
}
);