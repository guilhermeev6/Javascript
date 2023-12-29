function converter() {
    let res = document.querySelector('div.result')
    let distance = Number(prompt("Digite uma distância em metros (m)"))

    let Km = (distance / 1000).toFixed(3)
    let Hm = (distance / 100).toFixed(3)
    let dam = (distance / 10).toFixed(3)
    let dm = (distance).toFixed(3)
    let cm = (distance * 10).toFixed(3)
    let mm = (distance * 100).toFixed(3)
    
    res.innerHTML = `<h1>A distância de ${distance} metros, corresponde a...</h1>`
    res.innerHTML += `<p>${Km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${Hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
}