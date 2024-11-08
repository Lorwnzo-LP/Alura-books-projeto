import { books } from "./main.js";
import { showBooksOnScreen } from "./foreachMethod.js";
import { sumPrices, showTotalPrice } from "./reduceMethod.js";

export const buttons = document.querySelectorAll('.btn');

export function filter(){
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value; 
    let filteredBooks = category == 'disponivel'? filterByAvailability() : filterByCategory(category)
    showBooksOnScreen(filteredBooks);
    if (category == 'disponivel'){
        let totalPrice = sumPrices(filteredBooks);
        showTotalPrice(totalPrice);
    }
}

function filterByCategory(category) {
    return books.filter(book => { return book.categoria == category; });
}

function filterByAvailability() {
    return books.filter(book => { return book.quantidade > 0; });
}

