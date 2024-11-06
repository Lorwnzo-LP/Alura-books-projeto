import { exibirLivrosNaTela } from "./metodoForeach.js";
import { botoes, filtrar } from "./metodoFilter.js";
import { botao, livrosOrdenados } from "./metodoSort.js";

export let livros = [];
const endpoitApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getEndpointDaAPI();
async function getEndpointDaAPI(){
        const res = await fetch(endpoitApi);
        livros = await res.json();
        console.table(livros);
        exibirLivrosNaTela(livros)
    }

botoes.forEach(btn => btn.addEventListener('click',filtrar));
botao.addEventListener('click',() => {
    livrosOrdenados();
});