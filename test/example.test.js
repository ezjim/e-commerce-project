// IMPORT MODULES under test here:
// import findById from '../Books/common/utils.js';
import books from '../Books/data/cart.js';
import renderBooks from '../Books/data/render-book.js'; // import example
import { calcLineTotal } from '../Books/common/utils.js';
import cart from '../Books/common/utils';
import { calcOrderTotal } from '../Books/common/utils.js';
// import roundCurrecny from '../Books/common/utils.js';

const test = QUnit.test;

test('findById', function(assert) {
    //Arrange
    const paradiseLost = {
        title: 'Paradise Lost',
        author: 'Robert Milton',
        yearPublished: '1667',
        category: 'novel',
        discription: 'Milton story has two narrative arcs, one about Satan and the other following Adam and Eve. It begins after Satan and the other rebel angels have been defeated and banished to Hell',
        image: './assets/paradiseLost-mil.jpg',
        price: 20.00,
    };

    // Set up your parameters and expectations
    const expected = '<li class=\"novel\" title=\"Paradise Lost\"><h3></h3><img src=\"./assets/./assets/paradiseLost-mil.jpg\" alt=\"undefinedimage\"><p class=\"price\">$20.00<button value=\"Paradise Lost\">Add</button></p></li>';
    const result = renderBooks(paradiseLost).outerHTML;
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('calculate line total', (assert) => {

    // arrange

    const quantity = 2;

    const price = 20.00;

    const expected = 40.00;

    // act 

    const total = calcLineTotal(quantity, price);

    // assert

    assert.equal(total, expected);

});

test('calculate order total', (assert) => {

    const expected = 60.00;

    const orderTotal = calcOrderTotal(cart, books);

    assert.equal(orderTotal, expected);
});