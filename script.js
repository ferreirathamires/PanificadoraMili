let carrinho = []
let totalCarrinho = 0

document.querySelectorAll(".comprar").forEach(btn => {
    btn.addEventListener("click", () => {
        let produto = btn.dataset.produto 
        let preco = parseFloat(btn.dataset.preco)

        carrinho.push({produto, preco})
        totalCarrinho += preco
        let li = document.createElement("li")
        li.textContent = `${produto} - R$ ${preco.toFixed(2)}`

        document.getElementById("lista-carrinho").appendChild(li)
        document.getElementById("totalCarrinho").innerHTML = totalCarrinho.toFixed(2)
    })

})

function calcularItem(nome, preco, idInput, idResultado) {

let qtd = parseInt(document.getElementById(idInput).value)

let subtotal = qtd * preco

let desconto = (nome === "Pao" && qtd > 5)? subtotal * 0.1 : 0

let total = subtotal - desconto

let taxaEntrega1 = 5.00

let totalComTaxa = total + taxaEntrega1

document.getElementById(idResultado).innerHTML = `${nome}: ${qtd} x R$ ${preco.toFixed(2)} = R$ ${subtotal.toFixed(2)} 
| Desconto: R$ ${desconto.toFixed(2)} | Total: R$ ${total.toFixed(2)} | Taxa de entrega R$ ${taxaEntrega1} 
| Total com Entrega: R$ ${totalComTaxa.toFixed(2)}`

}

// 