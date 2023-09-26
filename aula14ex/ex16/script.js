function Calcular() {
  let inicio = parseInt(document.getElementById("inicio").value);
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let result = document.getElementById("resultado");

  let f = Number(fim.value);
  let p = Number(passo.value);

  result.innerHTML = "";
  for (let c = inicio; c <= f; c = c + p) {
    result.innerHTML += ` ${c} `;
  }
}
