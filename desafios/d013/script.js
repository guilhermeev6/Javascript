function passou(first, second) {
  let media = (first + second) / 2;
  if (media < 3) {
    res.innerHTML += `<p>Com as notas ${first} e ${second}, a média é ${media}</p>`;
    res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <b>REPROVADO</b></p>`;
  } else if (media <= 6) {
    res.innerHTML += `<p>Com as notas ${first} e ${second}, a média é ${media}</p>`;
    res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <b>RECUPERAÇÃO</b></p>`;
  } else {
    res.innerHTML += `<p>Com as notas ${first} e ${second}, a média é ${media}</p>`;
    res.innerHTML += `<p>Com média acima de 6,0, o aluno está <b>APROVADO</b></p>`;
  }
}


function entrar() {
  let name = prompt("Qual é o nome do aluno?");
  let first = Number(prompt(`Primeira nota de ${name}: `));
  let second = Number(prompt(`Segunda nota de ${name}: `));
  let res = document.getElementById("res");

    res.innerHTML = `<h1>Analizando a situação de ${name}</h1>`;
    passou(first, second);
}
