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

// Challenge 2

/**
 * Adds numbers together
 * @returns {number} Returns the sum
 */

function add() {
  return this.a + this.b;
}

/**
 * Multiples numbers
 * @param {number} added - Passes a number 
 * @returns {number} Returns the sum of added * c
 */
function multiply(added) {
  return added * this.c;
}

/**
 * Makes use of this keyword to bind functions to the object and log out result
 */
function internal() {
  // Makes the this = internal object
  // bound add function to internal object so we can use it's properties to return a value
  const added = this.add.call(this.internal);
  // Makes the this = internal object
  // bound the mutilpy function to internal object so we can use it's properties to return a value
  const result = this.multiply.call(this.internal, added);
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
