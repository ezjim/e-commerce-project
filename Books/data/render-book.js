import { makePrettyCurrency } from '../common/utils.js';


function renderBooks(books) {
    const li = document.createElement('li');
    li.className = books.category;
    li.title = books.title;

    const h3 = document.createElement('h3');
    h3.textContent = books.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = './assets/' + books.image;
    img.alt = books.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = makePrettyCurrency(books.price);
 
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = books.title;
    p.appendChild(button);

    li.appendChild(p);

    return li;

}

export default renderBooks;