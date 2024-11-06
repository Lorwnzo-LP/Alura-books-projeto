import { livros } from "./main.js";
import { exibirLivrosNaTela } from "./metodoForeach.js";

export const botao = document.getElementById('btnOrdenarPorPreco')

export function livrosOrdenados(){
    let ordenados = livros.sort((a,b) => {
        return a.preco - b.preco
    })
    exibirLivrosNaTela(ordenados);
};