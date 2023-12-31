let cot = Number(prompt("Antes de mais nada. Quanto está acotação do dólar agora?"))

function isNumOrEmpty(n) {
    if(isNaN(n) || n == 0 || n < 0){
        return alert("Por favor, insira valores numéricos") // É false pois n]ao é um número.
    } else{
        return true // É true pois é um número.
    }
}

if(isNumOrEmpty(cot)){
    function converter(){
        let res = document.querySelector('div#res')
        let qtd = Number(prompt("Quantos R$ você tem na carteira?"))

        if(isNumOrEmpty(qtd)){
            let value = qtd * cot
            res.innerHTML = `O valor R$: ${qtd} convertido em dólar é: U$: ${value}`
        }
    }
}