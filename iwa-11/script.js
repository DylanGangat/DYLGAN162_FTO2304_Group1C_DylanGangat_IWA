// const item = document.querySelector("[data-order-state='new']");
// item.foo = "bar";

// console.log(item)
// item.dataset.orderState = "old";
// console.log(item.hasAttribute("data-order-state"))
// console.log(item.getAttribute("data-order-state"));
// console.log(item.setAttribute("data-order-state", "young"))
// console.log(item.removeAttribute("data-order-state"))

// // console.log(item.attributes)
// const names = document.querySelectorAll(".name");
// const otherNames = document.getElementsByClassName("name");
// console.log(names, otherNames);

// console.log(document.documentElement.parentNode);

// console.log(document.body);
// console.dir(document.body);

// document.body.textContent = "<b>Dylan</b>";
// document.body.innerHTML = "<h1>Dylan</h1>";

// const element = document.querySelector("[data-widget-name]");
// console.log(element)
// console.log(element.dataset.widgetName = "bob")
// element.setAttribute('data-widget-name', 'Dylan')
// console.log(element);

const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = root1.querySelector(".biscuits");
const donuts1 = root1.querySelector(".donuts");
const pancakes1 = root1.querySelector(".pancakes");
const status1 = root1.querySelector(".status");

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = root2.querySelector(".biscuits");
const donuts2 = root2.querySelector(".donuts");
const pancakes2 = root2.querySelector(".pancakes");
const status2 = root2.querySelector(".status");

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = root3.querySelector(".biscuits");
const donuts3 = root3.querySelector(".donuts");
const pancakes3 = root3.querySelector(".pancakes");
const status3 = root3.querySelector(".status");

biscuits1.lastElementChild.textContent = root1.dataset.biscuits;
donuts1.lastElementChild.textContent = root1.dataset.donuts;
pancakes1.lastElementChild.textContent = root1.dataset.pancakes;
status1.lastElementChild.textContent = root1.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits2.lastElementChild.textContent = root2.dataset.biscuits;
donuts2.lastElementChild.textContent = root2.dataset.donuts;
pancakes2.lastElementChild.textContent = root2.dataset.pancakes;
status2.lastElementChild.textContent = root2.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits3.lastElementChild.textContent = root3.dataset.biscuits;
donuts3.lastElementChild.textContent = root3.dataset.donuts;
pancakes3.lastElementChild.textContent = root3.dataset.pancakes;
status3.lastElementChild.textContent = root3.dataset.delivered === "true" ? "Delivered" : "Pending";
