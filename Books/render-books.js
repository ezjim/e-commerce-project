import { findById } from './common/utils.js';

export default function readMoreBooks(book) {
    
    const li = document.createElement('li');
    li.className = book.category;
    li.title = book.description;

    const h3 = document.createElement('h3');
    h3.textContent = book.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + book.image;
    img.alt = book.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    const ItemPrice = '$' + book.price.toFixed(2);    
    p.textContent = ItemPrice;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.value = book.id;
    addButton.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }

        let cartItem = findById(book.id, cart);

        if (!cartItem) {
            cartItem = {
                id: book.id,
                quantity: 1
            };

            cart.push(cartItem);
        } else {
            cartItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);
    });

    p.appendChild(addButton);

    li.appendChild(p);

    return li;
}
