const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// // Do not change code above this comment

// console.log(futureId in holidays ? holidays[futureId].name : `ID ${futureId} not created yet`);
// Optional Chaining: ?. returns undefined if not defined else returns value
console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`);

const copied = structuredClone(holidays[christmas]);
copied.name = "X-mas";

const correctDate = new Date(`25 December ${currentYear} 13:25`);
correctDate.setHours(0);
correctDate.setMinutes(0);

const isEarlier = correctDate < holidays[6].date;

console.log("New date is earlier:", isEarlier);

if (isEarlier) copied.date = correctDate;
console.log("ID change:", holidays[christmas].id !== copied.id);
console.log("Name change:", holidays[christmas].name !== copied.name ? copied.name : false);
console.log(
  "Date change:",
  holidays[christmas].date !== copied.date ? `${copied.date.getDate()}/${copied.date.getMonth() + 1}/${copied.date.getFullYear()}` : false
);

const firstHolidayCorrectDateFormat = new Date(holidays[0].date).getTime();

const firstHolidayTimestamp = Math.min(
  firstHolidayCorrectDateFormat,
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);

const lastHolidayTimestamp = Math.max(
  firstHolidayCorrectDateFormat,
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth();
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth();

console.log(`0${firstDay}/0${firstMonth + 1}/${currentYear}`);
console.log(`${lastDay}/${lastMonth + 1}/${currentYear}`);

const randomHoliday = holidays[Math.round(Math.random() * 8)];
const randomHolidayDate = new Date(randomHoliday.date); // I had to create a new Date Object because holidays[0].date isn't a date object but the rest is.

// const randomHolidayDay = randomHolidayDate.getDate() < 10 ? `0${randomHolidayDate.getDate()}` : randomHolidayDate.getDate();
// const randomHolidayMonth = randomHolidayDate.getMonth() + 1 < 10 ? `0${randomHolidayDate.getMonth() + 1}` : randomHolidayDate.getMonth() + 1;

const randomHolidayDay = randomHolidayDate.getDate().toString().padStart(2, "0");
const randomHolidayMonth = (randomHolidayDate.getMonth() + 1).toString().padStart(2, "0");

console.log(`${randomHolidayDay}/${randomHolidayMonth}/${currentYear}`);

