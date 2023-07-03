// Challenge 1

//This is the firstname of the user */
const USER = "John";

// This is the lastname of the user
const SURNAME = "Smith";

console.log(USER, SURNAME);

// Challenge 2

/** (c) ACME Inc. 2010 */

// This is the date that a user created their account

const DATE = "10/07/2014";

console.log(DATE);

// Challenge 3

/*
It is important to show the following message in order to:
* to assure users
* to scare hackers
* to impress investors
*/

console.warn("Security scan starting");

// It is important to let user know when they can close the page

console.info("Please wait for scan to complete before closing the browser.");

// Owen's Challenge

for (let i = 1; i <= 5; i++) {
  const STAR = "*";
  let groupOfStars = STAR.repeat(i);
  console.log(groupOfStars);
}
