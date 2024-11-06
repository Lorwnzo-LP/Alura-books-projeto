import { aplicarDesconto } from "./metodoMap.js";
import { exibirValor } from "./metodoReduce.js";

const localLivros = document.getElementById("livros");

export function exibirLivrosNaTela(listaLivros){
    exibirValor.innerHTML = '';
    let livrosComDesconto = aplicarDesconto(listaLivros);
    localLivros.innerHTML = '';
    livrosComDesconto.forEach(livro => {
        let disponivel = livro.quantidade > 0? '' : 'indisponivel';
        localLivros.innerHTML = localLivros.innerHTML + `
        <div class="livro">
          <img class="livro__imagens ${disponivel}" src="${livro.imagem}" alt="${livro.alt}" />
          <h2 class="livro__titulo">
            ${livro.titulo}
          </h2>
          <p class="livro__descricao">${livro.autor}</p>
          <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
          <div class="tags">
            <span class="tag">${livro.categoria}</span>
          </div>
        </div>
        `
    });
}