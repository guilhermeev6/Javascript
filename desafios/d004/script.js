function comprar() {
    let prod = prompt("Que produto você está comprando?")
    let price = prompt(`Quanto custa ${prod} que você está comprando?`)
    let value = prompt(`Qual foi o valor que você deu para pagar ${prod}?`)
    let troco = Number(value) - Number(price)

    alert(`Você comprou ${prod} que custou R$ ${price},00. Deu R$ ${value},00 emdinheiro e vai receber ${troco},00 de troco. Volte Sempre!`)
}