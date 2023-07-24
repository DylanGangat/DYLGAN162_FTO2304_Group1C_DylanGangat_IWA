import { html, createOrderHtml } from "./view.js";
import { state, createOrderData } from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = event => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = event => {};
const handleDragEnd = event => {};

/**
 * Toggles open attribute to show or hide the "data help overlay" dialog element
 * @param {*} event
 */
const handleHelpToggle = event => {
  if (event.target.hasAttribute("data-help")) html.help.overlay.toggleAttribute("open");
  if (event.target.hasAttribute("data-help-cancel")) {
    html.help.overlay.toggleAttribute("open");
    html.other.add.focus();
  }
};

/**
 * Toggles open attribute to show or hide the "data add overlay" dialog element
 * @param {*} event
 */
const handleAddToggle = event => {
  if (event.target.hasAttribute("data-add")) html.add.overlay.toggleAttribute("open");

  if (event.target.hasAttribute("data-add-cancel")) {
    html.add.overlay.toggleAttribute("open");
    html.add.form.reset();
    html.other.add.focus();
  }
};

const handleAddSubmit = event => {
  event.preventDefault();
  // Store user input values for the title, table and assign column value to equal "ordered"
  const order = {
    title: html.add.title.value,
    table: html.add.table.value,
    column: html.columns.ordered.getAttribute("data-column"),
  };
  // Set state orders object to the object that has been modified in the createOrderData()
  state.orders = createOrderData(order);
  // Create and return Html DIV element which includes certain values from the state.orders object
  const element = createOrderHtml(state.orders);
  // If we only want one order throughout using the app
  // html.columns[state.orders.column].innerHTML = "";
  html.columns[state.orders.column].appendChild(element);

  // Hide Overlay with remove attribute and Reset the add order form
  html.add.overlay.removeAttribute("open");
  html.add.form.reset();
  console.log("STATE: ", state);
  // console.log("STATE: ", state.orders, "HTML ORDER ELEMENT: ", element, "HTML: ", html);
};

const handleEditToggle = event => {
  console.log(event.target);
  html.edit.overlay.toggleAttribute("open");

  // if (event.target.closest(".order").hasAttribute("draggable")) {
  //   html.edit.overlay.toggleAttribute("open");
  //   const { title, table, column } = state.orders;
  //   html.edit.title.value = title;
  //   html.edit.table.value = table;
  //   html.edit.column.value = column;
  //   console.log("STATE: ", state.orders, title, table, column);
  // }
  // if (event.target.hasAttribute("data-edit-cancel")) {
  //   console.log(event.target);
  //   html.edit.overlay.toggleAttribute("open");
  // }
};

const handleEditSubmit = event => {};
const handleDelete = event => {};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
