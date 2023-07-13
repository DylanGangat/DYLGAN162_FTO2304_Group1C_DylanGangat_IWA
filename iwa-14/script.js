/**
 * Owen's FizzBuzz Challenge:
 *
 * Checks if number is multiple of 3 or 5 and logs out the passing condition string
 * @param {number} number - takes in a number
 */

const fizzBuzzChallenge = number => {
  number = parseInt(number);
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Fizz buzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  }
};

fizzBuzzChallenge(10);

// Challenge 1

const firstName = "John";
const age = 35;
const hobby = "Coding";

/**
 * Logs out the value
 * @param {string} parameter - The string to log out
 */
const logTwice = parameter => {
  console.log(parameter);
  console.log(parameter);
};

function showHobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

showHobby();
