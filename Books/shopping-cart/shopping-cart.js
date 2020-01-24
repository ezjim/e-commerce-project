import books from '../data/books.js';
import { getOrderTotal } from '../data/register.js';
import renderLineItem from '../render-line-item.js';
import { toUSD } from '../common/utils';
import store from '../data/store.js';

const tbody = document.getElementById('table-body');
const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const cartItem = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, cartItem);
    tbody.appendChild(dom);
}

const totalCell = document.getElementById('total-cell');

const orderTotal = toUSD(getOrderTotal(shoppingCart, books));

totalCell.textContent = orderTotal;
