import { applyDiscount } from "./mapMethod.js";
import { totalPriceId } from "./reduceMethod.js";

const showBooksTarget = document.getElementById('livros');

export function showBooksOnScreen(booksList){
    totalPriceId.innerHTML = ''
    showBooksTarget.innerHTML = ''
    let booksListWithDiscount = applyDiscount(booksList);
    booksListWithDiscount.forEach(book => {
            let available = book.quantidade > 0? '' : 'indisponivel';
            showBooksTarget.innerHTML = showBooksTarget.innerHTML + `
            <div class="livro">
                <img class="livro__imagens ${available}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">
                ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
            `;        
        });
}

