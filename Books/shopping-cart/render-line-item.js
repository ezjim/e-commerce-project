import { toUSD } from '../common/utils.js';

function renderLineItem(lineItem, Book) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = book.name;
    tr.appendChild(quantityCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * book.price;
    totalCell.textContent = toUSD(total);
    return tr;

}

export default renderLineItem;