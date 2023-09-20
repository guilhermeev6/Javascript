
function carregar() {
	let msg = document.querySelector('div#msg')
	let img = document.getElementById('imagem')
	let agora = new Date()
	let hora = agora.getHours()
	let min = agora.getMinutes()
	let foto = document.querySelector('div#foto')

	msg.innerHTML = `Agora são ${hora}:${min}.`

	if(hora >= 0 && hora < 12) {
		img.src = 'img/manhã.jpg'
		document.body.style.background = "#FA965A"
	} 

	else if(hora >= 12 && hora < 18) {
		img.src = 'img/Tarde.jpg'
		document.body.style.background = "#b9846f"
	} 

	else {
		img.src = 'img/noite.jpg'
		document.body.style.background = "#987AAF"
	}
}