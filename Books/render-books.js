import { toUSD } from './common/utils.js';
import register from '../Books/data/store.js';


function renderBooks(books) {
    const li = document.createElement('li');
    li.className = books.category;
    li.title = books.description;

    const h3 = document.createElement('h3');
    h3.textContent = books.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = books.image;
    img.alt = books.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(books.price);
    
    // const usd = toUSD(books.price);
    // p.textContent = usd;
    // const priceTextNode = document.createTextNode(usd);
    // p.appendChild(priceTextNode);
 
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = books.name;
    console.log(books.name);
    button.addEventListener('click', () => {
        register.orderProduct(books.name);
        console.log('doesitwork');
        
    });
    p.appendChild(button);

    li.appendChild(p);
    
    
    return li;


}

export default renderBooks;