// IMPORT MODULES under test here:
import isYes from '../is-yes.js';
QUnit.module('Testing isYes');

const test = QUnit.test;

test('isYes should take affirmative responses as arguments and return true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'yes' || 'y' || 'absolutely' || 'yep';

    const expected = true;
    

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(input); 

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
