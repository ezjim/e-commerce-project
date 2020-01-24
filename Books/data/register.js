export function findProduct(books, name) {

    // loop the array
    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        // check the code against fruit.code
        if (book.name === name) {
            return book;
        }
    }

    // loop done
    return null;
}

export function calcLineTotal(quantity, price) {
    const changes = Number((quantity * price).toFixed(2));
    return changes;
}

// eslint-disable-next-line no-unused-vars
export function getOrderTotal(cart, books) {

    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        let cartLoop = cart[i].name;
        let itemData = findProduct(books, cartLoop);
        orderTotal = orderTotal + calcLineTotal(itemData.price, cart[i].quantity);
    }
    return orderTotal;
    
}