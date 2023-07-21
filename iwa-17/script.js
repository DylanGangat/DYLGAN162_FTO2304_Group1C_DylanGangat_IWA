const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Gets you the first day of next month but by using a day = 0 in the Date object it goes back on day from the 1st of the next month.
const getDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = length => {
  const result = [];

  for (let i = 0; i < length; i = i + 1) {
    result.push(i);
  }

  return result;
};

/**
 * Creates and stores a months days and weeks in an object that will be used createHtml function
 * @returns {Object}
 */
const createData = () => {
  // Current date which is 20 July
  const current = new Date();
  //   console.log(current);
  // Sets date to the 1st
  current.setDate(1);
  console.log("1st of a Month: ", current);
  // Get the day 6 which is Saturday
  const startDay = current.getDay();
  console.log("startDay: ", startDay);
  // Get max amount of days in the month
  const daysInMonth = getDaysInMonth(current);
  console.log("daysInMonth: ", daysInMonth);

  const weeks = createArray(6);
  // console.log("Weeks: ", weeks);

  // Days of the week starting with 0 as sunday
  const days = createArray(7);

  const result = [];
  for (const weekIndex of weeks) {
    // console.log("weeks: ", weeks, "weekIndex: ", weekIndex);
    result.push({
      week: weekIndex + 1,
      days: [],
    });

    for (const dayIndex of days) {
      //   console.log("Days: ", days, "DayIndex: ", dayIndex, "StartDay: ", startDay, "weekIndex: ", weekIndex);
      const day = dayIndex - startDay + weekIndex * 7 + 1;
      console.log("Day: ", day);

      const isValid = day > 0 && day <= daysInMonth;
      //   console.log(isValid);

      result[weekIndex].days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
  }
  console.log("Results: ", result);

  return result;
};

// 3. This will be use in the createHtml() and returns value to it

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
 * Loops through the a given months weeks and its corresponding days, creating html td (table data) elements for their individual values that will return and be visible in the browser.
 *  Creates each of the weeks and their days as a td element that will be return in a tr element and displayed within the tbody parent tag.
 *  @param {Object} data
 * @returns Html markup to be outputted in the tbody element
 */
const createHtml = data => {
  console.log("createHtml DATA", data);

  let result = "";

  for (const { week, days } of data) {
    // Loops once for the week and then loops again for the days of that week
    console.log("Week:", week, "Days: ", days);

    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);
    console.log("Inner1: ", inner);
    console.log("result html: ", result);
    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value;
      const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
      const isAlternate = week % 2 === 0;

      console.log("dayOfWeek: ", dayOfWeek, "value: ", value, "isToday: ", isToday, "isWeekend: ", isWeekend, "isAlternate: ", isAlternate, "Week: ", week);

      let classString = "table__cell";
      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;
      inner = addCell(inner, classString, value);
    }
    console.log("Inner2: ", inner);
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
