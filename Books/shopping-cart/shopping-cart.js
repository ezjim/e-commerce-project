import books from '../data/books.js';
import { findById, calcOrderItem } from '../common/utils.js';
import renderLineItem from '../render-line-item.js';

const total = document.getElementById('total');
const placeOrder = document.getElementById('placeOrder');
const tBody = document.getElementById('tBody');



const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
} else {
    cart = [];
}

cart.forEach(cartItem => {
    const bookItem = findById(cartItem.id, books);
    const update = renderLineItem(cartItem, bookItem);

    tBody.appendChild(update);
    
});

const orderTotal = calcOrderItem(cart, books);
total.textContent = orderTotal;

if (cart.length === 0) {
    placeOrder.disabled = true;
} else {
    placeOrder.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });

}