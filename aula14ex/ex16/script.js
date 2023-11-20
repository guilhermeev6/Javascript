function Calcular(){
  let inicio = parseInt(document.getElementById('inicio').value)
  let fim = parseInt(document.getElementById('fim').value)
  let passo = parseInt(document.getElementById('passo').value)
  let result = document.getElementById('resultado')
  if (inicio == "" || fim == "" || passo == ""){
    alert("Insira valores maiores que 0.")
  } else{
    for(c = inicio; c <= fim; c = c + passo){
        result.innerHTML += c
    }
  }
}