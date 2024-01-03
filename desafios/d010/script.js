function calcular() {
    let a = Number(prompt("Qual o valor de a?"))
    let b = Number(prompt("Qual o valor de b?"))
    let c = Number(prompt("Qual o cvalor de c?"))

    let count = (b*b) - 4 * (a*c)

    let res = document.getElementById('res')
    res.innerHTML = "<h1>Resolvendo Bhaskara</h1>"
    res.innerHTML += `<p>A equação atual é <b>${a}x² + ${b}x + ${c} = 0</b></p>`
    res.innerHTML += `<p>O cálculo realizado será <b>Δ = ${b}² -4.${a}.${c}</b></p>`
    res.innerHTML += `<p>O valor calculado foi <b>Δ = ${count}</b></p>`
}