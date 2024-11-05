import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import { aplicarDesconto } from "./metodoMap.js";
import { livros } from "./main.js";

const botao = document.getElementById("btnOrdenarPorPreco");

botao.addEventListener("click", () => {
    livrosOrdenados();
})

export function livrosOrdenados(){
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco;
    })

    exibirOsLivrosNaTela(livrosOrdenados);
    

}
