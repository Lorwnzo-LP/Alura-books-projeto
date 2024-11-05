import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import { livros } from "./main.js";
import { elementoComValorTotalDeLivrosDisponiveis } from "./metodoForEach.js";
import { calcularValorTotalDeLivrosDisponiveis } from "./metodoReduce.js";


const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', livrosFiltrados))

export function livrosFiltrados(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let filtrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(filtrados);
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(filtrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livros => { return livros.categoria == categoria; });
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valor){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `
}




