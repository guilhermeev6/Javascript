function isNumNotEmpty(n){
    if(isNaN(n) || n == 0 || n < 0){
        return alert("Insira um valor válido.")
    } else{
        return true
    }
}

function calcular() {
    let res = document.querySelector('div#res')
    let prod = prompt("Qula é o produto que você está comprando?")
    let price = Number(prompt(`Qual é o preço de ${prod}?`))
    if(isNumNotEmpty(price)){
        let desconto = 10/100 * price
        let finalValue = price - desconto
        res.innerHTML = `<h1>Calculando desconto de 10% para ${prod}</h1>`
        res.innerHTML += `<p>O Preço original era R$ ${price}.</p>`
        res.innerHTML += `<p>Você acaba de ganhar R$ ${desconto} de desconto (-10%).</p>`
        res.innerHTML += `<p>No fim, você vai pagar R$ ${finalValue} no produto ${prod}.</p>`
    }
}