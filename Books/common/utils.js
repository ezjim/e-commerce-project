const findByName = (books, name) => {
    for (let i = 0; i < books.lenth; i++) {
        const book = books[i];
        if (book.name === name) {
            return book;
        }
    }
};

const toUSD = (number) =>
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
        const book = findByName(books, lineItem.name);
        const lineTotal = calcLineTotal(book.price, cart[i].quantity);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}

export default findByName;
export {
    calcLineTotal,
    roundCurrency,
    toUSD,
    calcOrderTotal
};