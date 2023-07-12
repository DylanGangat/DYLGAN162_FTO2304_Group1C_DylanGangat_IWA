let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

/**
 * Converts a string to a number and reassigns the calculated = number
 */
const logCalc = () => {
  const isString = typeof calculated === "string";
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  calculated = calculatedAsNumber + 1;
};

/**
 * Calls logCalc() and reassigns variables if it passes the condition
 */

const calcUser = () => {
  logCalc();
  if (calculated > 2) user = "John";
  if (calculated > 2) state = "requesting";
  if (calculated > 3) state = "idle";
};

/**
 * Logs to the console if condtion is true
 */
const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();


