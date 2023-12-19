function tabuada() {
  let num = document.getElementById('number')
  let tabuada = document.getElementById('seletab')
  if(num.value.length == 0){ //Verificando se o valor existe(se a caixa está vazia)
    alert("Digite um número.")
  } else {
    let n = Number(num.value)
    let c = 1 //Criando o contador referencial padrão de todo laço de repetição
    tabuada.innerHTML = '' //Limpando a tabela antes de inserir outro número
    while(c <= 10) {
      let item = document.createElement('option') //Criando o item que será, de acordo com a condição, repetido no select.
      item.text = `${n} x ${c} = ${n*c}` //Colocando o valor que o item irá possuir.
      tabuada.appendChild(item) //Adicionando item no select(tabuada)
      c++ //Fazendo o contador funcionar (Tanto no while quanto no for)
    }
  }
}