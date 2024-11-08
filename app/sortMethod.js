import { books } from "./main.js";
import { showBooksOnScreen } from "./foreachMethod.js";

export function orderList(){
    let orderedList = books.sort((a, b) =>  {
        return a.preco - b.preco
    });
    showBooksOnScreen(orderedList);
};