let num = document.querySelector("input#number");
let lista = document.querySelector("select#lista");
let res = document.querySelector("div.res");
let valores = [];

//Criando a função que será chamada.
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) { //Colocando o parâmetro do valor de 1 a 100.
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) { //-1 é o resutado que o vetor devolve quando o valor não existe.
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) { //Se esses parâmetros para cada função forem verdadeiros, ele executa.
    valores.push(Number(num.value)); //Registrando o valor no vetor.
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
  } else {
    alert("Valor inválido ou já encontrado na lista.");
  }
}

function finalizar() {}
