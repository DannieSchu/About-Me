import isYes from '../is-yes.js';

// Get quiz button and store as variable
const button = document.getElementById('quiz-button');

// Get empty results section and store as variable
const results = document.getElementById('results')

button.addEventListener('click', () => {
    // Log out that button works
    console.log('The button works');

    // Launch prompt asking user's name and store as variable
    const name = prompt('What is your name?');

    // Launch prompt confirming that the user wants to continue
    const confirmation = confirm(`${name}, would you like to discover your knitting potential?`);

    // If user doesn't want to continue, break out of function with return
    if (confirmation === false) {
        return;
    }
    
    // Store responses to three questions
    const answerOne = prompt('Do you like the feel of natural fibers?');
    const answerTwo = prompt('Do you enjoy making things?');
    const answerThree = prompt('Do you prefer comfy couches to sandy beaches?');

    // Initialize count at 0
    let count = 0;

    // Increase count if answers are affirmative
    if (isYes(answerOne))
        count++;
    if (isYes(answerTwo))
        count++;
    if (isYes(answerThree))
        count++;

    // Set empty total section test to string taking in name and count
    if (count > 2) {
        results.textContent = `${name}, you answered ${count} questions correctly. You must be a knitter!`;
    } else { 
        results.textContent = `It's great that you are exploring new hobbies, ${name}! Have you considered sports?`
    }
})