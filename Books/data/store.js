import books from './books.js';
import { findProduct } from './register.js';

const bookKey = 'books';
const cartKey = 'shopping-cart';

const register = {
    storage: window.localStorage,

    save(key, books) {
        const json = JSON.stringify(books);
        register.storage.setItem(key, json);
    },

    get(key) {
        const json = register.storage.getItem(key);
        const books = JSON.parse(json);
        return books;
    },

    getItems() {
        let items = register.get(bookKey);

        if (!items) {
            register.save(bookKey, books);
            items = books;
        }
        return items;
    },

    getItem(name) {
        const storeBooks = register.getItems();
        const item = findProduct(storeBooks, name);
        return item;
    },

    getShoppingCart() {
        let shoppingCart = register.get(cartKey);

        if (!shoppingCart) {
            register.save(cartKey, []);
            shoppingCart = [];
        }
        return shoppingCart;
    },

    orderProduct(name) {
        const shoppingCart = register.getShoppingCart();
        const lineItem = findProduct(shoppingCart, name);

        if (lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                name: name,
                quantity: 1
            };

            shoppingCart.push(lineItem);
        }

        register.save(cartKey, shoppingCart);
    }
};

export default register;
