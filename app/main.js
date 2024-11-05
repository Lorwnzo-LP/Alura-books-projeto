import { exibirOsLivrosNaTela } from './metodoForEach.js';
import { aplicarDesconto } from './metodoMap.js';


export let livros = [];
const endpoitDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';



getBuscarLivrosDaAPI();
    async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpoitDaAPI);
    livros = await res.json();
    exibirOsLivrosNaTela(livros);
}

