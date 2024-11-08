export const totalPriceId = document.getElementById('valor_total_livros_disponiveis');
export function sumPrices(list){
    return list.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2);
}

export function showTotalPrice(value){
        totalPriceId.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${value}</span></p>
        </div>
        `;
}

