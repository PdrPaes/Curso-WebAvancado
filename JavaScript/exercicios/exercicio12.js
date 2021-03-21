/*12) Faça um algoritmo que calcule o fatorial de um número.*/
let fatorial = function(a){
    contador1 = a
    for(let i=1; contador1>1; i++){
        contador1--
        //console.log(contador1)
        a = a * contador1
        //console.log(a)
    }
    return a
}

console.log(fatorial(8))