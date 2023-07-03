const firstName = "Johannes";
const surname = "Potgieter";
export let role = "Intern";

const display = firstName + " " + surname + " (" + role + ")";
document.querySelector("#johannes").innerText = display;
