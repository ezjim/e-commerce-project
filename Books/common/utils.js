// this function takes quanity and amount and returns a total

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return Math.round(amount * 100) / 100;
}

// this function takes an array and an id and returns the first ...
// found item that has an .id property that matches the passed in id.
// Will return null if no match is found

export function findById(id, array) {
    let result = null;

    array.forEach(arrayItem => {
        if (id === arrayItem.id) {
            result = arrayItem; } 
    });
    return result;
}

// This function takes the cart array and products array.
// Calculate the total of your cart data as the expected value.
export function calcOrderItem(cart, catAccessories) {
    let orderTotal = 0;

    cart.forEach(cartItem => {
        const catItem = findById(cartItem.id, catAccessories);
        const cartItemTotal = calcLineItem(cartItem.quantity, catItem.price);
        orderTotal += cartItemTotal;
    });
    return '$ ' + orderTotal.toFixed(2);
}