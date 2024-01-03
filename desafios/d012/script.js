function caro(antigo, novo) {
  if (novo > antigo) {
    res.innerHTML += `<p>Hoje o produto está mais caro.</p>`;
  } else {
    res.innerHTML += `<p>Hoje o produto está mais barato</p>`;
  }
}

function subiu(antigo, novo) {
  if (novo > antigo) {
    let caroCount = novo - antigo;
    let taxa = (caroCount/antigo)*100
    res.innerHTML += `O preço subiu R$ ${caroCount} em relação ao preço anterior.`;
    res.innerHTML += `Uma variação de ${taxa}% para cima`
  } else {
    let baratoCount = antigo - novo;
    let taxa = (baratoCount/antigo)*100
    res.innerHTML += `O preço caiu R$ ${baratoCount} em relação ao preço anterior.`;
    res.innerHTML += `Uma variação de ${taxa}% para baixo`
  }
}


function verificar() {
  let last = Number(prompt("Qual era o preço anterior do produto?"));
  let newp = Number(prompt("Qual é o preço atual do produto?"));
  let res = document.getElementById("res");

  res.innerHTML = "<h1>Analisando os valores informados</h1>";
  res.innerHTML += `<p>O produto custava R$ ${last} e agora custa R$ ${newp}.</p>`;
  caro(last, newp);
  subiu(last, newp);
}
