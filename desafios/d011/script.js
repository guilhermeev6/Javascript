function isBissexto(n) {
  if (n % 400 == 0) {
    return true;
  } else if (n % 100 == 0) {
    return false;
  } else if (n % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function verificar() {
  let year = Number(prompt("Qual é o ano que você quer verificar?"));
  let res = document.getElementById("res");

  res.innerHTML = `<h1>Analisando o ano de ${year}...</h1>`;
  if (isBissexto(year)) {
    res.innerHTML += `<p>O ano de ${year} <b>É BISSEXTO</b></p>`;
  } else {
    res.innerHTML += `<p>O ano de ${year} <b>NÃO É BISSEXTO</b></p>`;
  }
}
