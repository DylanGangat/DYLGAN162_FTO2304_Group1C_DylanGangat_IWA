const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Gets you the first day of next month but by using a day = 0 in the Date object it goes back on day from the 1st of the next month.
const getDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// const getDaysInMonth = date => {
//   console.log("date: ", date);
//   new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   console.log(new Date(date.getFullYear(), date.getMonth() + 1, 0));
// };

// // Only edit below

// 1. createData uses this so fix this first
const createArray = length => {
  const result = [];

  for (let i = 0; i < length; i = i + 1) {
    result.push(i);
  }

  return result;
};

// 2. This uses createArray() and returns value to pass into createHTML() as an arguement

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

  const daysInMonth = getDaysInMonth(current);
  console.log("daysInMonth: ", daysInMonth);

  const weeks = createArray(5);
  console.log("Weeks: ", weeks);
  // =============================================================================================== NOT QUITE SURE YET
  // Days of the week starting with 0 as sunday
  const days = [0, 1, 2, 3, 4, 5, 6];

  const result = [];
  for (const weekIndex of weeks) {
    console.log("weeks: ", weeks, "weekIndex: ", weekIndex);
    result.push({
      week: weekIndex + 1,
      days: [],
    });

    for (const dayIndex of days) {
      //   console.log("Days: ", days, "DayIndex: ", dayIndex, "StartDay: ", startDay, "weekIndex: ", weekIndex);
      const day = dayIndex - startDay + weekIndex * 7 + 1;
      //   console.log("Day: ", day);

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

// 4. Takes in whats returned from createData

const createHtml = data => {
  console.log("createHtml DATA", data);

  let result = "";

  for (const { week } of data) {
    console.log("Week:", week);

    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);
    console.log("Inner: ", inner);

    //    for (const { dayOfWeek, value } of days) {
    //         const isToday = new Date().getDate() === value
    //         const isWeekend = dayOfWeek ===  | dayOfWeek ===
    //         const isAlternate = week % 2 === 0

    // 					let classString = 'table__cell'

    //         if () classString = `${} table__cell_`
    //         if () classString = `${} table__cell_`
    //         if () classString = `${} table__cell_`
    //         inner = addCell()
    //     }

    // result = `
    //     ${result}
    //     <tr>${inner}</tr>
    // `
  }

  // return result
};

// Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)

// ============================================================================ REMOVE AT END
const data = createData();
createHtml(data);
