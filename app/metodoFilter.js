import { livros } from "./main.js";
import { exibirLivrosNaTela } from "./metodoForeach.js";
import { calcularValorTotal, exibirValorTotal } from "./metodoReduce.js";

export const botoes = document.querySelectorAll(".btn");

export function filtrar(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let filtrados = categoria == 'disponivel' ? filtrarDisponiveis() : filtrarCategorias(categoria)
    exibirLivrosNaTela(filtrados); 
    exibirSomaDeValores(categoria, filtrados)
}

function exibirSomaDeValores(categoria, filtrados) {
    if (categoria == 'disponivel') {
        let precoTotal = calcularValorTotal(filtrados);
        exibirValorTotal(precoTotal);
    }
}

function filtrarCategorias(categoria) {
    return livros.filter(livros => { return livros.categoria == categoria; });
}

function filtrarDisponiveis() {
    return livros.filter(livros => { return livros.quantidade > 0; });
    
}

