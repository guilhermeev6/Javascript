const num = [5, 8, 2, 9, 3]

/*
num.push(8) | Insere um número
num[2] = 3 | Substitui um número
num.sort() | Coloca o vetor em ordem crescente
*/

pos = num.indexOf(8)

if(pos == -1){
    console.log("O valor nãofoi encontrado!")
} else{
    console.log(`O valor está na posição ${pos}`)
}