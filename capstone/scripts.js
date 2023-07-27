import { BOOKS_PER_PAGE, authors, genres, books, html } from "./data.js";
// Usesthe length ofthe books object through the code
const matches = books;
let page = 1;

// if (!books && !Array.isArray(books)) throw new Error("Source required");
// if (!range && range.length < 2) throw new Error("Range must be an array with two numbers");

const css = {
  day: {
    dark: "10, 10, 20",
    light: "255, 255, 255",
  },

  night: {
    dark: "255, 255, 255",
    light: "10, 10, 20",
  },
};

/* ========================================== BOOKS CREATION ========================================= */

/**
 * Creates a book preview as a button element with the provided book information.
 * @param {Object} book - The book object containing details of the book.
 * @param {string} book.author - The ID of the book's author.
 * @param {string} book.id - The unique ID of the book.
 * @param {string} book.image - The URL of the book's cover image.
 * @param {string} book.title - The title of the book.
 * @returns {HTMLButtonElement} The generated button element representing the book preview.
 *
 * @example
 * const book = {
 *   author: "authorId123",
 *   id: "bookId456",
 *   image: "https://example.com/book456.jpg",
 *   title: "Sample Book Title"
 * };
 *
 * const previewButton = createPreview(book);
 * document.getElementById("preview-container").appendChild(previewButton);
 */
const createPreview = book => {
  const { author: authorId, id, image, title } = book;
  const element = document.createElement("button");
  element.className = "preview";
  element.setAttribute("data-preview", id);
  element.innerHTML = /* html */ `
              <img
                  class="preview__image"
                  src="${image}"
              />

              <div class="preview__info">
                  <h3 class="preview__title">${title}</h3>
                  <div class="preview__author">${authors[authorId]}</div>
              </div>
          `;
  return element;
};

const fragment = document.createDocumentFragment();
const extractedBooks = books.slice(0, 36);
//  Loops through the extractedBooks Array and creates a list of book previews and appends them to the HTML document.
for (const book of extractedBooks) {
  const preview = createPreview(book);
  fragment.appendChild(preview);
}

html.list.items.appendChild(fragment);

/* ========================================== GENRES OPTION CREATION ========================================= */
const createGenreOptionsHtml = () => {
  const fragment = document.createDocumentFragment();
  const element = document.createElement("option");
  element.value = "any";
  element.innerText = "All Genres";
  fragment.appendChild(element);

  for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement("option");
    element.value = id;
    element.innerText = name;
    fragment.appendChild(element);
  }

  return fragment;
};
createGenreOptionsHtml();
html.search.genres.appendChild(createGenreOptionsHtml());

// /* ========================================== AUTHOR OPTION CREATION ========================================= */

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// /* ========================================== DARK + LIGHT MODE THEME START ========================================= */
// // Dark + Light Theme mode
// // Putting it all together, the code checks if the user's device or browser environment supports dark mode. If the user prefers dark mode, the expression will evaluate to true. If the user doesn't prefer dark mode or their device/browser doesn't support the window.matchMedia method, the expression will evaluate to false.
// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// document.documentElement.style.setProperty('--color-dark', css[v].dark);
// document.documentElement.style.setProperty('--color-light', css[v].light);

// /* ==========================================  ========================================== */

// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// /* ==========================================  EVENT LISTENERS ========================================== */

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')

//     data-list-items.innerHTML = ''
//     // const fragment = document.createDocumentFragment()
//     // const extractedBooks = source.slice(range[0], range[1])

//     // for ({ author, image, title, id }; extractedBooks; i++) {
//     //     const { author: authorId, id, image, title } = props

//     //     element = document.createElement('button')
//     //     element.classList = 'preview'
//     //     element.setAttribute('data-preview', id)

//     //     element.innerHTML = /* html */ `
//     //         <img
//     //             class="preview__image"
//     //             src="${image}"
//     //         />

//     //         <div class="preview__info">
//     //             <h3 class="preview__title">${title}</h3>
//     //             <div class="preview__author">${authors[authorId]}</div>
//     //         </div>
//     //     `

//     //     fragment.appendChild(element)
//     // }

//     // data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview

//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         }
//     }

//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title

//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description

// }

html.search.button.addEventListener("click", event => {
  console.log("click", event.target.closest("button"));
});

html.settings.button.addEventListener("click", event => {
  console.log("settings", event.target.closest("button"));
});
