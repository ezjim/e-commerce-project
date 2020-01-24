import books from '../data/books.js';
import renderBooks from '../render-books.js';

const list = document.getElementById('book');

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const dom = renderBooks(book);
    list.appendChild(dom);
}