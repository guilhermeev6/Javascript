//Declarando o resultado para sanar erros futuros.
let resultado = document.querySelector("span.result")
resultado.innerHTML = "Preparando a Contagem..."


function Calcular() {
	let inicio = parseInt(document.querySelector("input.inicio").value)
	let fim = parseInt(document.querySelector("input.fim").value)
	let passo = parseInt(document.querySelector("input.passo").value)
	//As variáveis foram criadas dentro da função pois a função só irá pegar os valores quando for clicado.
	

	//Validações
	if (inicio === '' || fim === '' || passo === '') {
		alert("Insira um número.")
	} else if (inicio == 0 || fim == 0 || passo == 0) {
		alert("Insira um número\ maior que 0.")
	} else if (inicio <0 || fim <0 || passo <0) {
		alert("Insira um número positivo.")
	} 

	//Código que vai fazer funcionar.
	else {
		let sequencia = ''
		for (let c = inicio;c <= fim;c = c + passo) {
			sequencia = sequencia + c + ', ';
		}
		sequencia = sequencia.slice(0, -2); // Remove a vírgula e o espaço após o último número
		resultado.innerHTML = sequencia
	}
}

