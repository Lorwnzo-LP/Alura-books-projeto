export const exibirValor = document.getElementById("valor_total_livros_disponiveis");
export function calcularValorTotal(lista){
    return lista.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2);
}
export function exibirValorTotal(valor){
    exibirValor.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `;
}