import { html, createOrderHtml, moveToColumn, updateDraggingHtml } from "./view.js";
import { state, createOrderData, updateDragging } from "./data.js";

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


// Sets id and column and updateDragging function

const handleDragStart = event => {
  const { id } = event.target.dataset;
  const { column } = state.orders[id];
  updateDragging({ source: id, over: column });
};

// Gets id and columd data and calls moveToColumn function which will append the element to a different column
const handleDragEnd = event => {
  event.preventDefault();
  const { source, over } = state.dragging;
  moveToColumn(source, over);
};

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
 * Toggles open attribute to show or hide the Add Order Form
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

/**
 * Take the values a user inputs and creates an unique object with it
 * stores it in the state.orders object
 * creates an element from the object and displays it on the page.
 * @param {*} event
 */
const handleAddSubmit = event => {
  event.preventDefault();

  const order = createOrderData({
    title: html.add.title.value,
    table: html.add.table.value,
    column: html.columns.ordered.dataset.column,
  });

  state.orders[order.id] = order;
  const element = createOrderHtml(state.orders[order.id]);

  html.columns[order.column].appendChild(element);

  // Hide Overlay with remove attribute and Reset the add order form
  html.add.overlay.removeAttribute("open");
  html.add.form.reset();
};

/**
 * When one of the elements are clicked it opens up the Edit Order Form
 * showing its previous values inside the inputs and the cancel button will hide the Edit Order Form.
 * @param {*} event
 */
const handleEditToggle = event => {
  const parentElement = event.target.closest(".order");

  if (parentElement?.matches(".order")) {
    html.edit.overlay.setAttribute("open", "");
    const id = parentElement.getAttribute("data-id");

    const { title, table, column } = state.orders[id];
    html.edit.title.value = title;
    html.edit.table.value = table;
    html.edit.column.value = column;
    html.edit.id.setAttribute("data-edit-id", id);
  }

  if (event.target.hasAttribute("data-edit-cancel")) {
    html.edit.overlay.removeAttribute("open");
  }
};

/**
 * A helper function that clears the columns html before appending all the updated element to their columns from state.order object
 */
const handleEditSubmitReset = () => {
  Object.values(html.columns).forEach(column => {
    column.innerHTML = "";
  });

  Object.values(state.orders).forEach(item => {
    const element = createOrderHtml(item);
    html.columns[item.column].appendChild(element);
  });
  html.edit.form.reset();
  html.edit.overlay.removeAttribute("open");
};

/**
 * Updates a specific object in the state orders object with the use of it's unique id and displays the updated element on the page.
 * @param {*} event
 */
const handleEditSubmit = event => {
  event.preventDefault();
  const id = html.edit.id.getAttribute("data-edit-id");
  const order = state.orders[id];

  order.title = html.edit.title.value;
  order.table = html.edit.table.value;
  order.column = html.edit.column.value;
  order.created = new Date();

  handleEditSubmitReset();
};

/**
 * Deletes a specific object with an unique id in the state orders object and updates the page removing it's element from the page.
 * @param {} event
 */
const handleDelete = event => {
  const id = html.edit.id.getAttribute("data-edit-id");
  delete state.orders[id];
  handleEditSubmitReset();
};

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
