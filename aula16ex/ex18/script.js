let num = document.querySelector("input#number");
let lista = document.querySelector("select#lista");
let res = document.querySelector("div.res");
let valores = [];

//Criando a função que será chamada.
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    //Colocando o parâmetro do valor de 1 a 100.
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    //-1 é o resutado que o vetor devolve quando o valor não existe.
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    //Se esses parâmetros para cada função forem verdadeiros, ele executa.
    valores.push(Number(num.value)); //Registrando o valor no vetor.
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = ""; // Limpar o resultado assim que adicionarum número após ter finalizado.
  } else {
    alert("Valor inválido ou já encontrado na lista.");
  }
  num.value = ""; // limpandoo o input após inserir valor. Por isso está depois do código de validação.
  num.focus(); //Selecionando automaticamente o input.
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar");
  } else {
    let tot = valores.length;
    let maior = valores[0]; //Ele declara a primeira posição como o maior pois, obrigatoriamente para o 'Finalizar()' ser chamado, o vetor tem que ter pelo menos um valor.
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) { //Para cada posição no vetor, após a varredura, ele executa as duas condições.
      if (valores[pos] > maior) { //Se a posição em que o contador 'pos' estiver for maior que a variável 'maior'
        maior = valores[pos]; //Logo, a variável recebe o maior valor encontrado, após a varredura no vetor.
        soma += valores[pos]; //Quanto maior o valor encontrado, ele soma com o que já está dentro da variável.
      } else if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`;
  }
}
