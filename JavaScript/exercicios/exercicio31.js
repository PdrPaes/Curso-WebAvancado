/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/
let negativos = (vetor) =>{
    numerosNegativos = 0
    for (i=0; i<vetor.length; i++){
        if(vetor[i] < 0){
            numerosNegativos++
        }
    }
    return 'Existem '+numerosNegativos+' números negativos no vetor'
}
var vetor = [-1,2,-3,4,-5,6,-7,-8,9,12,14,15,16]
console.log(negativos(vetor))