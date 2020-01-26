import books from '../data/books.js';
import renderBooks from '../render-books.js';


const ul = document.getElementById('books');


for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const doIt = renderBooks(book);
    
    ul.appendChild(doIt);
}
