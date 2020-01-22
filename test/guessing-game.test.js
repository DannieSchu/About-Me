// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';
QUnit.module('Testing compareNumbers');

const test = QUnit.test;

test('should return 0 if number guessed is correct', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const correctNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
}
);


test('should return 1 if number guessed is too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 18;
    const correctNumber = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
}
);


test('should return -1 if number guessed is too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 6;
    const correctNumber = 13;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
}
);

