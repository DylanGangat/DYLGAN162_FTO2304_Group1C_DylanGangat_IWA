const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

// Query the DOM and stored each book and their individual chlidren in variables.

const book1 = document.getElementById("book1");
const book1Status = book1.querySelector(".status");
const book1ReserveBtn = book1.querySelector(".reserve");
const book1CheckOutBtn = book1.querySelector(".checkout");
const book1CheckInBtn = book1.querySelector(".checkin");

const book2 = document.getElementById("book2");
const book2Status = book2.querySelector(".status");
const book2ReserveBtn = book2.querySelector(".reserve");
const book2CheckOutBtn = book2.querySelector(".checkout");
const book2CheckInBtn = book2.querySelector(".checkin");

const book3 = document.getElementById("book3");
const book3Status = book3.querySelector(".status");
const book3ReserveBtn = book3.querySelector(".reserve");
const book3CheckOutBtn = book3.querySelector(".checkout");
const book3CheckInBtn = book3.querySelector(".checkin");

// Modifies checkin buttons color 
book1CheckInBtn.style.color = "";
// Change the book status text color 
book1Status.style.color = STATUS_MAP.overdue.color;
// Disable button if it passes the condition
book1ReserveBtn.disabled = STATUS_MAP.overdue.canReserve === false ? true : false;
book1CheckOutBtn.disabled = STATUS_MAP.overdue.canCheckout === false ? true : false;
book1CheckInBtn.disabled = STATUS_MAP.overdue.canCheckIn === false ? true : false;


// Modifies checkin buttons color 
book2CheckInBtn.style.color = "";
// Change the book status text color 
book2Status.style.color = STATUS_MAP.reserved.color;
// Disable button if it passes the condition
book2ReserveBtn.disabled = STATUS_MAP.reserved.canReserve === false ? true : false;
book2CheckOutBtn.disabled = STATUS_MAP.reserved.canCheckout === false ? true : false;
book2CheckInBtn.disabled = STATUS_MAP.reserved.canCheckIn === false ? true : false;


// Modifies checkin buttons color
book3CheckInBtn.style.color = "";
// Change the book status text color 
book3Status.style.color = STATUS_MAP.shelf.color;
// Disable button if it passes the condition
book3ReserveBtn.disabled = STATUS_MAP.shelf.canReserve === false ? true : false;
book3CheckOutBtn.disabled = STATUS_MAP.shelf.canCheckout === false ? true : false;
book3CheckInBtn.disabled = STATUS_MAP.shelf.canCheckIn === false ? true : false;

