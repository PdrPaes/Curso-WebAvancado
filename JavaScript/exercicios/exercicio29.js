/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/
let intervalo = (vetor) =>{
    numerosNoIntervalo = 0
    for (i=0; i<vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <=20){
            numerosNoIntervalo++
        }
    }
    return numerosNoIntervalo
}
var vetor = [1,2,3,4,5,6,7,8,9,12,14,15,16]
console.log(intervalo(vetor))
