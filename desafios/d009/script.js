function reajustar () {
    let name = prompt("Qual é o nome do funcionário?")
    let salario = Number(prompt(`Qual é o salário de ${name}?`))
    let porc = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`))

    let qtd = (porc/100) * salario
    let salplus = salario + qtd

    let res = document.getElementById('res')
    res.innerHTML = `<h1>${name} recebeu um aumento salarial!</h1>`
    res.innerHTML += `<p>O salário atual era R$ ${salario}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar R$ ${qtd} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${name} vai passar a ganhar  R$ ${salplus}.</p>`
}