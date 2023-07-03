const firstName = "Alex";
const surname = "Naidoo";
export let role = "Head of Marketing";

const display = firstName + " " + surname + " (" + role + ")";
document.querySelector("#alex").innerText = display;