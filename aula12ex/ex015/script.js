function funfaLogo(){
	let data = new Date()
	let Ano = data.getFullYear()
	let frmAno = document.getElementById('Ano')
	let resultado = document.getElementById('resultado')

	if (frmAno.value.length == 0 || frmAno.value > Ano) {
		alert('[ERRO]: Verifique os dados e tente novamente!')
	}
	else{
		let sexo = document.getElementsByName('radSex')
		let Idade = Ano - frmAno.value
		let Genero = ''
		let img = document.createElement('img')
		img.setAttribute('id', 'foto')

		if(sexo[0].checked) {
			Genero = "Homem"
			if(Idade > 0 && Idade < 5) {
				//Bebê
				img.setAttribute('src', 'img/bebe-m.jpg')
			} else if(Idade < 10) {
				//Criança
				img.setAttribute('src', 'img/menino.jpg')
			} else if(Idade < 21) {
				// Jovem
				img.setAttribute('src', 'img/jovem-m.jpg')
			} else if(Idade < 50) {
				//Adulto
				img.setAttribute('src', 'img/homem.jpg')
			} else{
				//Idoso
				img.setAttribute('src', 'img/veio.jpg')
			}
		}


		else if(sexo[1].checked) {
			Genero = "Mulher"
			if(Idade > 0 && Idade < 5) {
				//Bebê
				img.setAttribute('src', 'img/bebe-f.jpg')
			} else if(Idade < 10) {
				//Criança
				img.setAttribute('src', 'img/menina.jpg')
			} else if(Idade < 21) {
				// Jovem
				img.setAttribute('src', 'img/jovem-f.jpg')
			} else if(Idade < 50) {
				//Adulto
				img.setAttribute('src', 'img/mulher.jpg')
			} else{
				//Idoso
				img.setAttribute('src', 'img/veia.jpg')
			}
		}
		resultado.style.textAlign  = "center"
		resultado.innerHTML = `Detectamos ${Genero} com a idade de ${Idade} anos.`
		resultado.appendChild(img)
	}
}

