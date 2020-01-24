import { calcLineTotal } from './common/utils.js';
import { toUSD } from './common/utils.js';

function renderLineItem(lineItem, book) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = book.name;
    tr.appendChild(quantityCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(priceCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(book.price);
    tr.appendChild(priceCell);
    

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = calcLineTotal(lineItem.quantity, book.price);
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;

}

export default renderLineItem;