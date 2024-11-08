export function applyDiscount(list){
    const discount = 0.3
    let listWithDiscount = list.map((book) => {return {...book, preco: book.preco - (book.preco * discount)}
                            })
    return listWithDiscount;
}