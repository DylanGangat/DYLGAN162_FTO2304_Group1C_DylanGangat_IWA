const tax = 8;
const rent = 400;
const food = 51.7501;
const salary = 800;
const transport = 10.2;
let hourOfDay = "00";
let minuteOfDay = "00";

// Only change below this line

if (hourOfDay !== "undefined" && minuteOfDay !== "undefined" && hourOfDay === "00" && minuteOfDay === "00") {
  const taxAsDecimal = tax / 100;
  const startingAfterTax = salary - (salary * taxAsDecimal);
  const balance = startingAfterTax - transport - food - rent;
  console.log("R" + balance.toFixed(2));
}
