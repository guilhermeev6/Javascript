/*console.log("HELLO")
console.log("HELLO")
console.log("HELLO")
console.log("HELLO")
console.log("HELLO")
console.log("HELLO")*/

let c /*contador*/ = 1;


//Testa antes e executa depois
while(c <= 6){
    console.log(`HELLO ${c}`)
    c++ //c = c + 1
}


//Executa antes e testa depois
do{
    console.log(`HELLO ${c}`)
    c++
} while(c <=6)
