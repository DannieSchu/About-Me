import compareNumbers from './compare-numbers.js';

// Get DOM elements
const guessInput = document.getElementById('input-number');
const submitButton = document.getElementById('submit-button');
const triesRemaining = document.getElementById('attempts-remaining');
const highLow = document.getElementById('high-low');
const winLoss = document.getElementById('win-loss');

// Randomly generate and store correct number (use const because it will not change unless refreshed; would use let if had a reset option)
const correctNumber = (Math.floor(Math.random() * 20));

// Set initial state of tries to 4
let tries = 4;

// Store variable to return loser message and disable button if run out of tries
function sayYouLost(compareNumbers) {
    if (tries === 0 && compareNumbers !== 0) { 
        winLoss.textContent = `You lost. Try again later.`;
        submitButton.disabled = true;
    }
}

// Add event listener for button
submitButton.addEventListener('click', () => {
    // Reduce tries by 1
    tries--;

    // Change value of remaining tries
    triesRemaining.textContent = tries;
    
    // Convert string input to number
    const guessStr = guessInput.value;
    const guess = parseInt(guessStr);

    // Save values of compare numbers to variable
    const isHighLow = compareNumbers(guess, correctNumber);

    if (isHighLow === 1) {
        // Return "too high" if guess > correct number
        highLow.textContent = `Guess again! ${guess} is too high.`;

    } else if (isHighLow === -1) { 
        // Return "too low" if guess < correct number
        highLow.textContent = `Guess again! ${guess} is too low.`;

    } else if (isHighLow === 0) {
        // Return "correct" and tell user they won if guess = correct number
        highLow.textContent = `${guess} is correct! You must have x-ray vision.`;
        submitButton.disabled = true;
        winLoss.textContent = `Congratulations!`;
    }
    sayYouLost();
}
);