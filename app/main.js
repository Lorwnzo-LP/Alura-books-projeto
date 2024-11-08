import { showBooksOnScreen } from "./foreachMethod.js";
import { buttons, filter } from "./filterMethod.js"
import { orderList } from "./sortMethod.js";

const endpointFromApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const availableButton = document.getElementById('btnOrdenarPorPreco');
const menuButton = document.getElementById('btnVoltarMenuPrincipal')


export let books = [];

getEndpointFromApi();
async function getEndpointFromApi(){
    const res = await fetch(endpointFromApi);
    books = await res.json();
    showBooksOnScreen(books);
}

buttons.forEach(btn => btn.addEventListener('click', filter));

availableButton.addEventListener("click", orderList);

menuButton.addEventListener("click", returnFirstList);

function returnFirstList(){
    let firstList = getEndpointFromApi();
    showBooksOnScreen(firstList);
};
