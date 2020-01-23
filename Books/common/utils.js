const findById = (books, id) => {
    for (let i = 0; i < books.lenth; i++) {
        const book = books[i];
        if (book.id === id) {
            return book;
        }
    }
}


const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US', {
                style: 'currency',
                currency: 'USD',
            });



function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    console.log(amount);
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

function calcOrderTotal(cart, books) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const book = findById(books, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, book.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}

export default findById;
export {
    calcLineTotal,
    roundCurrency,
    makePrettyCurrency,
    calcOrderTotal
};