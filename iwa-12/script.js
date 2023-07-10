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
const book1 = document.getElementById("book1");
const book1Status = book1.querySelector(".status");
const book1ReserveBtn = book1.querySelector(".reserve");
const book1CheckOutBtn = book1.querySelector(".checkout");
const book1CheckInBtn = book1.querySelector(".checkin");
console.log(book1, book1Status, book1ReserveBtn, book1CheckOutBtn, book1CheckInBtn);

const book2 = document.getElementById("book2");
const book2Status = book2.querySelector(".status");
const book2ReserveBtn = book2.querySelector(".reserve");
const book2CheckOutBtn = book2.querySelector(".checkout");
const book2CheckInBtn = book2.querySelector(".checkin");
console.log(book2, book2Status, book2ReserveBtn, book2CheckOutBtn, book2CheckInBtn);

const book3 = document.getElementById("book3");
const book3Status = book3.querySelector(".status");
const book3ReserveBtn = book3.querySelector(".reserve");
const book3CheckOutBtn = book3.querySelector(".checkout");
const book3CheckInBtn = book3.querySelector(".checkin");
console.log(book3, book3Status, book3ReserveBtn, book3CheckOutBtn, book3CheckInBtn);

book1CheckInBtn.style.color = "";
book1Status.style.color = STATUS_MAP.overdue.color;

// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

book2CheckInBtn.style.color = "";
book2Status.style.color = STATUS_MAP.reserved.color;

// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

book3CheckInBtn.style.color = "";
book3Status.style.color = STATUS_MAP.shelf.color;

// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
