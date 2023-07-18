const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = athlete => {
  //   console.log(athlete)

  const { firstName, surname, id, races } = athlete;
  //   console.log(firstName, surname, id, races);

  // nesting to get and store date and time values of first item in array
  const [{ date, time }] = races.reverse();
  //   console.log(date, time);
  // Created to store the html we create in this function
  const fragment = document.createDocumentFragment();
  //   console.log("CREATED A FRAGMENT: ", fragment);

  const title = document.createElement("h2");
  title.textContent = id;

  fragment.appendChild(title);
  //   console.log("ADDED H2 TO FRAGMENT: ", fragment);
  // Creates a descriptive list element
  const list = document.createElement("dl");
  // Reusable date format
  const dateFormatted = new Date(date);

  // Getting the correct format for the day, month and year
  const day = dateFormatted.getDate();
  //   console.log("DAY: ", day);
  const month = MONTHS[dateFormatted.getMonth()];
  //   console.log("MONTH: ", month);
  const year = dateFormatted.getFullYear();
  //   console.log("YEAR: ", year);

  // Destructuring and Adding the race times together
  const [first, second, third, fourth] = time;
  const total = first + second + third + fourth;
  //   console.log("RACE TOTAL TIME:", total);

  // Calculating the hours and minutes taken to complete the race
  const hours = Math.floor(total / 60);
  const minutes = total - hours * 60;
  //   console.log("HOURS: ", hours, "MINUTES: ", minutes);

  // Using variables to create HTML markup for the list
  list.innerHTML = /* html */ `

    <dt>Athlete:</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races:</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest):</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest):</dt>
    <dd>${hours.toString().padStart(2, 0)}:${minutes}</dd>
  `;
  //   console.log(fragment);
  return fragment.appendChild(list);
};

const {
  response: {
    data: { NM372, SV782 },
  },
} = data;

// console.log(NM372, SV782);

document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));
