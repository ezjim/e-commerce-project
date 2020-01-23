const findById = (books, id) => {
    for (let i = 0; i < books.lenth; i++) {
        const book = books[i];
        if (book.id === id) {
            return book;
        }
    }
}

export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });

export default findById;