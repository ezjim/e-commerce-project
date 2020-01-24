import { makePrettyCurrency } from './common/utils';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (books, order) => {
    const tableRow = document.createElement('tr');

    const totalPrice = order.quantity * books.price;
    const prettyPrice = makePrettyCurrency(books.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(books.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};