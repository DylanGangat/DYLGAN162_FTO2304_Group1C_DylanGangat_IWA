/**
 * Owen's FizzBuzz Challenge:
 *
 * Checks if number is multiple of 3 or 5 and logs out the passing condition string
 * @param {number} number - takes in a number
 */

const fizzBuzzChallenge = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
};

for (let i = 1; i <= 100; i++) {
  fizzBuzzChallenge(i);
}

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

// Challenge 2

/**
 * Adds numbers together
 * @param {Number} a - passes a number
 * @param {Number} b - passes a number
 * @returns {number} Returns the sum of the two numbers
 */

const add = (a, b) => {
  return a + b;
};

/**
 * Multiples numbers together and returns value
 * @param {Number} added - passes in a number
 * @param {Number} c - passes in a number
 * @returns {Number}
 */
const multiply = (added, c) => {
  return added * c;
};

/**
 * Makes use of the this keyword to get the values for the arguements
 */
function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const result = this.multiply(added, this.internal.c);
  console.log(result);
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
