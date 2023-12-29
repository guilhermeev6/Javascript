function akk() {
    let num = prompt("Digite um número inteiro qualquer.")
    if(num == '' || isNaN(num)){
        alert("Insira um número")
    } else{
        let after = Number(num) - 1
        let before = Number(num) + 1
        alert(`Antes de ${num}, temos o número ${after}. Depois de ${num}, temos o número ${before}.`)
    }
}



/*
function isNum(n) {
    if(n == '' || isNaN(n)){
        alert("Digite um número.")
        return false
    } else{
        return true
    }
}

function afterB(n) {
    let after = Number(n) - 1
    let before = Number(n) + 1
    alert(`Antes de ${n}, temos o número ${after}. Depois de ${n}, temos o número ${before}.`)
    return
}

function akk() {
    let num = prompt("Digite um número inteiro qualquer.")
    if(isNum(num)){
        afterB(num)
    }
}
*/