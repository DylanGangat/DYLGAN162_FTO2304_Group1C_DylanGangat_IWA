const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Returns the number of days in a month for a given date.
// The 0 in the third parameter of the new Date() sets the day to 0, which means one day less than the first day of the month, resulting in the last day of the previous month.
const getDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

/**
 * Creates an array of numbers with a specified length.
 *
 * @param {number} length - The length of the array to be created.
 * @returns {Array} An array of numbers.
 */

const createArray = length => {
  const result = [];

  for (let i = 0; i < length; i = i + 1) {
    result.push(i);
  }

  return result;
};

/**
 * Creates an array of objects representing the weeks and days of a month.
 *
 * @returns {Array} An array of objects containing week and days properties.
 */

const createData = () => {
  const current = new Date();
  // Sets date to the 1st
  current.setDate(1);
  // Get the 1st of the month
  const startDay = current.getDay();
  // Get max amount of days in the month
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(6);
  // Days of the week format 0-6 (sun-sat)
  const days = createArray(7);

  const result = [];

  for (const weekIndex of weeks) {
    result.push({
      week: weekIndex + 1,
      days: [],
    });

    for (const dayIndex of days) {
      const day = dayIndex - startDay + weekIndex * 7 + 1;
      const isValid = day > 0 && day <= daysInMonth;

      result[weekIndex].days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
  }

  return result;
};

/**
 * Adds a table data cell (td) to an existing HTML string.
 *
 * @param {string} existing - The existing HTML string.
 * @param {string} classString - The class string for the td cell.
 * @param {number} value - The value to be displayed in the td cell.
 * @returns {string} - The updated HTML string with the added td cell.
 */

const addCell = (existing, classString, value) => {
  const result = /* html */ `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

  return result;
};

/**
 * Creates an HTML table from an array of objects.
 *
 * @param {Array} data - An array of objects containing week and days properties.
 * @returns {string} - An HTML table string.
 */

const createHtml = data => {
  let result = "";

  for (const { week, days } of data) {
    // Loops once for the week and then has a nested loop for each day of that week

    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value;
      const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
      const isAlternate = week % 2 === 0;

      let classString = "table__cell";
      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;
      inner = addCell(inner, classString, value);
    }
    // Adds the week and its days and then loops to the next week.
    result = `
        ${result}
        <tr>${inner}</tr>
    `;
  }

  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
