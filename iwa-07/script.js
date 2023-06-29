// Challenge 1

const value = 3;
console.log(value + 4 + value);

// Challenge 2

const nickName = "Timmy";
const firstName = "Timothy";

console.log(`Good Morning, ${nickName || firstName}!`);

// Challenge 3

const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line

const leoCorrectBalance = Math.abs(leoBalance).toFixed(2);
const sarahCorrectBalance = Math.abs(sarahBalance).toFixed(2);

const owed = `R ${parseFloat(leoCorrectBalance) + parseFloat(sarahCorrectBalance)}`;

const owedNumberFormatted = `${owed.slice(0, 4)} ${owed.slice(4)}`;

const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${leoCorrectBalance})`;

const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahCorrectBalance})`;

const total = `Total amount owed:`;

const result = `
${leo}
${sarah}

${divider}
  ${total} ${owedNumberFormatted}
${divider}`;

console.log(result);
