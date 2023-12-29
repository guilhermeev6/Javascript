function converter() {
    let res = document.getElementById('res')
    let celcius = parseFloat(prompt("Digite a temperatura em °C (Celcius)"))

    if(isNaN(celcius) || celcius == ''){
        alert("Insira um número")
    } else{
        alert(fahrenheit(celcius))
        alert(kelvin(celcius))
    }

    function fahrenheit(x) {
        return (1.8*x + 32)
    }
    function kelvin(x) {
        return x + 273.15
    }
}